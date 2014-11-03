## Datenbankstruktur

Das Projekt Tweedback baut auf die relationale Datenbank *MySQL* auf. Die folgende Struktur beschreibt den Aufbau der einzelnen Tabellen.

##### Tabelle - buckets

```mysql
CREATE TABLE IF NOT EXISTS `buckets` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) unsigned NOT NULL,
  `messageId` int(11) unsigned NOT NULL,
  `moved` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `type` (`type`,`messageId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
```

##### Tabelle - categories

```mysql
CREATE TABLE IF NOT EXISTS `categories` (
  `messageId` int(11) unsigned NOT NULL,
  `categoryId` tinyint(4) unsigned NOT NULL,
  KEY `messageId` (`messageId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
```

##### Tabelle - contents

```mysql
CREATE TABLE IF NOT EXISTS `contents` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `text` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
```

##### Tabelle - events

```mysql
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL,
  `accessKey` varchar(50) NOT NULL,
  `emailAddress` tinytext NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `adminPassword` tinytext,
  `adminCookie` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accessKey` (`accessKey`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
```

In dieser Tabelle werden alle Veranstaltungen gespeichert. Der Angaben werden beim Erstellen der Veranstaltung getätigt.

##### Tabelle - messages

```mysql
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `eventId` int(11) unsigned NOT NULL,
  `type` tinyint(4) NOT NULL,
  `sent` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int(11) unsigned NOT NULL,
  `contentId` int(11) unsigned DEFAULT NULL,
  `supported` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eventId` (`eventId`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
```

##### Tabelle - participations

```mysql
CREATE TABLE IF NOT EXISTS `participations` (
  `eventId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `joined` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `eventId` (`eventId`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
```

##### Tabelle - usernames

```mysql
CREATE TABLE `usernames` (
  `userId` INT UNSIGNED NOT NULL ,
  `username` TINYTEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  `set` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  INDEX ( `userId` )
) ENGINE = MYISAM CHARACTER SET utf8 COLLATE utf8_general_ci;
```

##### Tabelle - users

```mysql
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
```

