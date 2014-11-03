## Anforderungen an das Live-Feedback-System Tweedback

### Akteure

Es werden zwei Gruppen von Akteuren unterschieden:

##### Dozenten (engl. Lecturers)

Als Dozent wird der Vortragende bezeichnet. Er legt die Veranstaltung im System an und verteilt die Zugangsdaten an die Teilnehmer. Er bekommt eine Darstellung der erfassten Rückmeldungen, die in das System eingegeben werden, und kann diese priorisieren und entfernen.

##### Teilnehmer (engl. Listeners)

Die Teilnehmer bekommen vom Dozenten die Zugangsdaten mitgeteilt. Sie können ihre Rückmeldungen mittels kurzen Mitteilungen dem Dozenten zutragen. Teilnehmer sehen eine Darstellung der gesamten oder aber vom Dozenten manipulierten Rückmeldungen. Ein gegenseitiges Unterstützen von Rückmeldungen anderer Teilnehmer ist möglich.

### Programmfunktionen

##### /PF010/ Verwaltung der Veranstaltungen

Das System benötigt keinen Administrator. Ein Dozent kann eine Veranstaltung durch Angabe folgender Parameter anlegen:

Parametername | Beschreibung | Datentyp (Notwendigkeit)
-------------------------- | -------- | --------------------------------------
name | Name der Veranstaltung | String
accessKey | Schlüssel für die Teilnehmer, sollte kurz und einfach sein | String
emailAddress | Adresse des Dozenten für Bericht | String (optional)
password | Passwort für Dozentenzugriff; wird nur benötigt, falls die Session abläuft | String (optional)

Nach dem Anlegen der Veranstaltung befindet sich der Dozent in der Dozentenansicht (/PF030/). Er ist automatisch eingeloggt.


##### /PF020/ Auswertung

Nach Beendigung der Veranstaltung durch den Dozenten mittels Klick auf eine entsprechende Schaltfläche oder durch mindestens 5 Stunden Inaktivität ohne neue Nachrichten wird ein detaillierter Bericht über die Veranstaltung und deren Nachrichten als PDF erzeugt und an den Dozenten per E-Mail geschickt.

##### /PF030/ Dozentenansicht

Die Ansicht des Dozenten gliedert sich in drei Bereiche und ist für das I-Pad 2 optimiert.

###### Geschwindigkeits- und Vertiefungsbereich (Speedometer und Detailmeter)

In diesem Bereich wird durch eine Art Tachometer eine Rückmeldung über das Geschwindigkeitsempfinden und das Vertiefungsbedüfnis der Teilnehmer gegeben. Die Werte werden anhand der Rückmeldungen und der Zeit, die seitdem vergangen ist, erzeugt. Eine Manipulation der Anzeige ist nicht vorgesehen.

###### Rückmeldungswolke (Feedback Cloud)

Die Rückmeldungswolke zeigt einzelne Rückmeldungen (Schlagwörter mit Symbolen, kurze Fragestellungen) an. Die Reihenfolge ergibt sich aus der Aktualität der Meldungen. Mittels verschiedener Schriftgrößen wird die Anzahl der Unterstützer verdeutlicht. Die Rückmeldungswolke erlaubt die folgenden Interaktionen:

 * Entfernen von Elementen: Der Dozent kann mittels „Drag-and-Drop“ einzelne Elemente der Wolke in ein Mülleimersymbol verschieben und somit von der Anzeige entfernen.
 * Zensur von Elementen und Urhebern: Der Dozent kann mittels „Drag-and-Drop“ einzelne Elemente der Wolke in ein erbannungssymbol verschieben und somit das Element selbst sowie weitere vom selben Urheber erzeugte Rückmeldungen von der Anzeige entfernen. Später erzeugte Elemente mit selbem Inhalt werden ebenfalls nicht angezeigt.

##### /PF040/ Teilnehmeransicht

Teilnehmer können sich mittels Loswort zu einer Veranstaltung verbinden. Zu Beginn bekommen sie von dem System eine eindeutige pseudomierte Zuteilung, die über die Dauer der Verbindung bestehen bleibt.

Die Ansicht gliedert sich in zwei Bereiche.

Im Bereich „Formular“ (Form Section) wird ein Formular für Nachrichten angezeigt. Dabei kann man mittels Buttons und kleinen Eingabefeldern kurze Nachrichten erstellen. Die Eingabefelder sind in der Länge begrenzt und können mit Zusatzinformationen (z. B. „Beispiel“, „Erläuterung“) versehen werden.

Im zweiten Bereich „Unterstützung“ (Support Section) werden die von den Teilnehmern zusammengetragenen Nachrichten angezeigt. Durch Klicken auf die Nachrichten unterstützt der Teilnehmer diese Nachricht und die Schrift wird größer angezeigt. Von dem Dozenten zur Kenntnis genommene Nachrichten („In-10-Minuten-Erinnern“) werden ausgegraut, bleiben aber sichtbar. Je nach verfügbarer Auflösung werden die Bereiche unterschiedlich dargestellt, siehe /PF050/ und /PF060/.

##### /PF050/ Teilnehmeransicht für große Bildschirme

Teilnehmern mit einem größeren Display (Laptop, Netbook, Tablet-Computer, PC) werden beide Bereiche gleichzeitig nebeneinander angezeigt.

##### /PF060/ Teilnehmeransicht für kleine Bildschirme

Teilnehmern mit einem kleinem Display (Smartphone) wird nur ein Bereich zeitgleich gezeigt. Zu Beginn ist die der Unterstützungsbereich. Durch Klicken auf einen Button wechselt man zwischen diesem und dem Formularbereich.

##### /PF070/ Zensur

Wird von dem Dozenten in der Dozentenansicht (/PF030/) eine Nachricht in den Zensurbereich verschoben, verschwindet die Nachricht von der Ansicht. Weitere Nachrichten mit gleichem Wortlaut werden ausgeblendet. Außerdem werden alle Nachrichten von dem Ersteller der zensierten Nachricht nicht mehr angezeigt.
