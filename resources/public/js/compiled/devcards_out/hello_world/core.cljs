(ns hello-world.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

;(defonce datatable-init
;         (.DataTable js/$))
;
;(defcard datatable-init-card datatable-init)

;(defcard my-first-card
;         (sab/html [:h1 "Devcards is freaking awesome!"]))

(defcard second-card
  (sab/html [:div
             [:h1 "This is your first devcard! Woot! Woot! Go Clojure"]
             [:div (.ready (js/$ js/document)
                           (fn []
                             (let [dataobj (clj->js {"data"
                                                    [["Tiger Nixon" "System Architect" "Edinburgh" 61 "2011/04/25" "$320,800"]
                                                     ["Tim Garrett"	"Accountant"	"Tokyo"	63	"2011/07/25"	"$170,750"]]})]
                             (js/console.log (pr-str dataobj))
                             (.DataTable (js/jQuery "#example")
                                         dataobj))))]]))

;(defn main []
;  ;; conditionally start the app based on wether the #main-app-area
;  ;; node is on the page
;  (if-let [node (.getElementById js/document "main-app-area")]
;    (js/React.render (sab/html [:div "This is working"]) node)))
;
;(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

