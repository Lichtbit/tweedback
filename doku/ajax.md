## Ajax-Schnittstellen

Es gibt mehrere Schnittstellen für die Bereitstellung von Informationen für Ajax-Requests. Dafür gibt es PHP-Skripte im Verzeichnis */ajax/*, die hier nachfolgend aufgeführt sind. Der Datenaustausch in Richtung der Skripte wird mit GET- und POST-Variablen getätigt. Die Antwortet beinhaltet immer ein JSON-Objekt.

### Vordefinierte Ausgabenformate

#### Fehlerfall

Die Angabe *message* ist an die gesetzte Sprache anzupassen.

```json
$ERROR <- {
    "success": false,
    "message": $STRING
}
```

```json
{
    "success": false,
    "message": "Access key not assigned."
}
```

#### Datum und Zeit

Es wird der Timestamp in Sekunden übergeben. 

```json
$DATETIME <- $INT
```

#### Veranstaltung

Eine Veranstaltung *$EVENT* bezeichnet immer ein ganzen Objekt einer Veranstaltung.

```json
$EVENT <- {
        "id": $INT,
        "name": $STRING,
        "accessKey": $STRING,
        "created": $DATETIME
    }
```

#### Benutzername

Der Benutzername *$USERNAME* muss nicht angeben werden. Wurde er von den Benutzern nicht angegeben ist der Benutzer anonym und es wird *null* angegeben.

```json
$USERNAME <- null | $STRING
```

#### Warnungen

Direkt in der Wurzel jeder Antwort kann ein Array mit Warnungen geschrieben werden. Damit werden unkritische Fehler der Webseite mitgeteilt.

```json
$WARNINGS <- [ $STRING* ]
```

```json
{
    "warnings": [
        "Selected event is readonly."
    ],
    "debug": [],
    "success": true,
    "cacheEventData": false,
    "event": {
        "id": "1",
        "name": "MGVmedia",
        "accessKey": "mgvmedia",
        "created": "2011-07-24 23:25:58"
    },
    "cloudMessages": [],
    "meters": []
}
```

### Schnittstellen

#### ajax/event-data.php

Diese Schnittstelle gibt vielfältige Informationen über eine ausgewähltes Veranstaltung. Sie kann mittels *accessKey* oder *eventId* angesprochen werden.

##### Eingaben

Typ | GET
--- | ---
*accessKey* | *accessKey* der Veranstaltung

oder 

Typ | GET
--- | ---
*eventId* | *eventId* der Veranstaltung

##### Ausgaben

###### Fehlerfall

```json
$ERROR
```

###### Erfolgsfall

```json
{
    "success": true,
    "event": $EVENT,
    "cacheEventData": $STRING|false,
    "cloudMessages": [
        $CLOUD_MESSAGE*
    ],
    "meters": [
        $METER*
    ]
}
```

Die Variable *cacheEventData* enthält eine relative URL zu einer json-Datei, die gecachte Informationen für weitere Auskünfte bereitstellt. Wenn die Variable auf *false* steht, ist keine gecachte Version vorhanden.

Eine *$CLOUD_MESSAGE* beinhaltet die Frage, bzw. das Stichwort unter *text*, eine Priorität von 1 bis 10 unter *priority* und den Namen des ursprünglichen Senders unter *name*. Das Array *categories* beinhaltet css-Klassen die eine Einteilung des Typs ermöglicht.

Es werden nur Nachrichten angezeigt, die in keinem speziellen Korb liegen, also im “Eingang” verweilen.

```json
$CLOUD_MESSAGE <- {
    "id": $INT,
    "text": $STRING,
    "priority": $INT,
    "sent": $DATETIME,
    "name": $USERNAME,
    "categories": [
        $STRING*
    ]
}
```

Ein *$METER* bezeichnet ein Tachometer. *value* kann dabei Werte von -10 bis +10 annehmen. Mit *categories* kann der Typ bestimmt werden.

```json
$METER <- {
    "name": $STRING,
    "value": $INT
}
```

#### ajax/create-event.php

Diese Schnittstelle legt eine neue Veranstaltung an. Bei Erfolg wird eine Session als Admin gestartet, das heißt, es wird eine spezielle Session-Cookie gesetzt.

##### Eingaben

Typ | POST
--- | ---
*name* | Name der Veranstaltung
*accessKey* | Loswort für die Teilnehmer
*emailAddress* | E-Mail-Adresse des Dozenten für detaillierten Bericht
*adminPassword* | Passwort für Verlust der Session

##### Ausgaben

###### Fehlerfall

```json
$ERROR
```

###### Erfolgsfall

```json
{
    "success": true,
    "event": $EVENT
}
```

#### ajax/send-message.php

Sendet eine Nachricht an den Server. Die Nachricht kann zwei grundlegend verschiedene Eigenschaften haben.

 * Tachometernachricht
 * Nachricht mit Inhalt

Eine Tachometernachricht kann nur nach Ablauf der Zeit einer vorherigen Nachricht des Nutzers verschickt werden. Nachrichten mit Inhalt können von jeden Benutzer nur einmal verschickt werden.

##### Eingaben

Typ | POST
--- | ---
*type* | Typ der Anfrage (Beispiel, Frage)
*text* | Frage oder Stichwort (bei einem Typ ohne Text bleibt dieses Feld leer)
*categories* | optional - Name oder Namen der Kategorien (falls mehrere Einträge Angabe als Array)
*eventId* | ID der Veranstaltung

oder

Typ | POST
--- | ---
*messageId* | ID der zu unterstützenden Nachricht
*eventId* | ID der Veranstaltung

##### Ausgaben

###### Fehlerfall

```json
$ERROR
```

###### Erfolgsfall

Die gleiche Ausgabe von *event-data.php*

#### ajax/move-message.php

Verschiebt eine Nachricht in einen bestimmten Korb.

Diese Funktionalität darf nur vom jeweiligen Vortragenden der Veranstaltung ausgeführt werden.

##### Eingaben

Typ | POST
--- | ---
*messageId* | ID der zu verschiebenden Nachricht
*bucketId* | ID des Korbes (0 bezeichnet den Posteingang)

##### Ausgaben

###### Fehlerfall

```json
$ERROR
```

###### Erfolgsfall

Die gleiche Ausgabe von *event-data.php*

#### ajax/set-username.php

Ändert den Namen des Benutzers.

### Eingaben

Typ | POST
--- | ---
*username* | Der zu setzende Name

##### Ausgaben

###### Fehlerfall

```json
$ERROR
```

###### Erfolgsfall

```json
{
    "success": true,
    "username": $USERNAME
}
```

