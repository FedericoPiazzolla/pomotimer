### Esercizio
Creare un pomodoro timer: che premendo un bottone avvi un timer di 25 minuti, premendo un altro bottono farà partire una pausa di 5 minuti.
stampare a schermo il conto alla rovescia, e aggiungere dei bottoni per lavvio, il reset e la pausa.

### Svolgimento
- [ ] creare in html lo scheletro del timer con i bottoni annessi
- [ ] sistemarlo con css;

- [ ] determiniamo le costanti e le variabili per:
- bottone di work;
- bottone di break;
- bottone di play;
- bottone di pause;
- bottone di restart.
- [ ] al premere del pulsante start si avviera un timer di 25 minuti, al termine del quale suonerà una sveglia.
- [ ] al premere del pulsante pausa: si fermerà il timer e per farlo ripartire bisogna premere sul pulsante play,
- [ ] al premere del pulsante reset, si azzerà il timer e rinizierà da 25 minuti.

- [ ] tramite una funzione determiniamo che allo start inizierà una funzione:
  - decremente il timer di 1 ogni secondo fino ad arrivare a 00:00;
  - una volta arrivato a 00:00 partirà il timer del break;
- [ ] treamite una funzione: creiamo una funzione che aumenti il timer e lo aggiorni all'interno del DOM ogni secondo.

- quando il timer è sulla sezione focus, l'altra sezione sarà oscurata e viceversa.