## Berechnungen

Innerhalb Tweedbacks werden Berechnung angestellt, deren Formeln hier zusammengetragen werden.

### Tachometer

Beim Tachometer soll die gewünschte Tendenz mit einem Zeiger im Bereich von -10 bis 10 gezeigt werden. Dafür gilt jede Stimmabgabe für 5 Minuten. Nur in dieser Zeit zählt die Stimme für die nachfolgende Formel:

Formel | Legende | Erläuterung
--- | --- | ---
`$supporter = sum{}{i}{$p_i} - sum{}{i}{$n_i}` | `$p_i` | Stimme ''positiv''
  | `$n_i` | Stimme ''negativ''
`$count = delim{lbrace}{matrix{2}{1}{{$curCount}{20}}} {|} matrix{2}{1}{{$curCount > 20}{$curCount <= 20}}`| ''$supporter'' | Anzahl der Nachrichtenunterstützer
  | ''$curCount'' | Anzahl der Personen im System
  | ''$count'' | Korrigierte Anzahl
`$interim = round({$supporter*20}/{$count})`| ''$interim'' | Zwischenergebnis
  | ''round()'' | Runden auf Ganzzahl
`$meter = delim{lbrace}{matrix{3}{1}{{-10}{$interim}{10}}} {|} matrix{3}{1}{{$interim < -10}{-10 <= $interim  <= 10}{$interim > 10}}`| ''$meter'' | Die zu ermittelnde Anzeigezahl

### Nachrichtenpriorität

Die Wichtigkeit einer Nachricht wird mit einer Skala von 1 (unwichtig) bis 10 (sehr wichtig) repräsentiert. Diese Priorität berechnet sich wie folgt:

Formel | Legende | Erläuterung
--- | --- | ---
`$count = delim{lbrace}{matrix{2}{1}{{$curCount}{20}}} {|} matrix{2}{1}{{$curCount > 20}{$curCount <= 20}}` | ''$curCount'' | Anzahl der Personen im System
  | ''$count'' | Korrigierte Anzahl
`$interim = floor({({$supporter / $count}*100)/5})`| ''$supporter'' | Anzahl der Nachrichtenunterstützer
  | ''$interim'' | Zwischenergebnis
  | ''floor()'' | Abrunden
`$prio = delim{lbrace}{matrix{3}{1}{{1}{$interim}{10}}} {|} matrix{3}{1}{{$interim < 1}{1 <= $interim  <= 10}{$interim > 10}}`| ''$prio'' | Die zu ermittelnde Priorität

