(ns hello_datatables.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest dom-node]]))

(enable-console-print!)

;(defonce dt
;         (.ready (js/$ js/document())
;                 (let [dataobj (clj->js {"data" [["Tiger Nixon" "System Architect" "Edinburgh" 61 "2011/04/25" "$320,800"]
;                                                   ["Tim Garrett"	"Accountant"	"Tokyo"	63	"2011/07/25"	"$170,750"]]
;                                           "columns"
;                                                  [{ "title" "Name" },
;                                                   { "title" "Position" },
;                                                   { "title" "Office" },
;                                                   { "title" "Age" },
;                                                   { "title" "Start date" },
;                                                   { "title" "Salary" }]})]
;                   (.DataTable (js/jQuery "#example") dataobj))))



(defcard my-first-card
         (sab/html [:div
                    [:h1 "Devcards is freaking awesome!"]]))

(defcard my-second-card
         (sab/html [:div
                    [:h1 "Table"]
                    [:table {:id "example"} ]]))

(defcard
  (fn [data-atom owner]
    (sab/html
      [:div
       [:h2 "Example: fn that returns React"]
       (prn-str data-atom)]))
  {:count 50})

(defcard trigger-datatables-data-file-and-style-example-table
         (fn [data-atom owner]
           (js/console.log "before .ready should be called")
           (.ready (js/$ js/document())
                   (let [dataobj (clj->js {"data" [["Tiger Nixon" "System Architect" "Edinburgh" 61 "2011/04/25" "$320,800"]
                                           ["Tim Garrett" "Accountant" "Tokyo" 63 "2011/07/25" "$170,750"]]
                                   "columns"
                                          [{"title" "Name"},
                                           {"title" "Position"},
                                           {"title" "Office"},
                                           {"title" "Age"},
                                           {"title" "Start date"},
                                           {"title" "Salary"}]})]
             (.DataTable (js/jQuery "#example") dataobj)))
           (js/console.log "after end of .ready")
           "Function to set up DataTable called after documnet was ready")


         ;; This just is initial data to that function.  Doesn't matter what we pass as we just want the side-effect
         ;; of cuasing it to update the #example table element in the html.
         ;; We could do the data and columns init via this data passed in if we wanted too!
         (:foo nil)
         )

;(defcard add-row-to-table
;         (fn [data-atom owner]
;           (let  [t (js/jQuery "#example")
;                  r (.row() t) ]
;                  (.add r (clj->js [
;                                     ["Poppy Smith"
;                                      "Researcher"
;                                      "Atlanta, GA"
;                                      "25"
;                                      "2012/02/14"
;                                      "$58,500"
;                                      ]])))
;           (.draw (js/Jquery "#example") true)
;           )
;         {:foo nil}
;         )

;(defcard {}               ; main obj
;         {}               ; initial data
;         {:heading true})



;(defn main []
;  ;; conditionally start the app based on wether the #main-app-area
;  ;; node is on the page
;  (if-let [node (.getElementById js/document "main-app-area")]
;    (js/React.render (sab/html [:div "This is working"]) node)))
;
;(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

