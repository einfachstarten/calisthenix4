/**
 * Strukturierte Trainingsdaten für das 4-Wochen-Calisthenics-Programm.
 * Alle Texte sind auf Deutsch verfasst und Phase 1 enthält vollständige Inhalte
 * für Woche 1. Die Wochen 2-4 dienen als Platzhalter für kommende Phasen.
 */
const workoutProgram = {
  week1: {
    title: 'Fundament aufbauen',
    quote:
      'Starte stark: Konzentriere dich auf saubere Technik und kontrollierte Wiederholungen.',
    day1: {
      title: 'Push-Power Fundament',
      subtitle: 'Drückkraft und Schulterstabilität',
      warmup: [
        {
          name: 'Armkreisen vorwärts und rückwärts',
          duration: 30,
          description:
            'Stehe aufrecht, strecke die Arme seitlich aus und beschreibe große Kreise nach vorne und hinten, um Schultergelenke aufzuwärmen.',
        },
        {
          name: 'Schulteröffner mit Band oder Handtuch',
          duration: 45,
          description:
            'Greife ein Band oder Handtuch breit, führe es kontrolliert über den Kopf und wieder nach vorne, um Brust und Schultern zu mobilisieren.',
        },
        {
          name: 'Handgelenkskreisen',
          duration: 30,
          description:
            'Verschränke die Finger, kreise die Handgelenke in beide Richtungen, um sie auf Druckbelastung vorzubereiten.',
        },
      ],
      main: [
        {
          name: 'Standard-Liegestütze',
          reps: '3×8–12',
          rest: 60,
          description:
            'Spanne Körpermitte und Gesäß an, halte Schultern über den Handgelenken und senke dich kontrolliert zur Matte ab.',
        },
        {
          name: 'Schrägbank-Liegestütze',
          reps: '3×10–15',
          rest: 45,
          description:
            'Stütze dich auf einer erhöhten Fläche ab und fokussiere dich auf explosive Streckung, um Brust und vordere Schultern zu aktivieren.',
        },
        {
          name: 'Diamant-Liegestütze',
          reps: '3×6–10',
          rest: 60,
          description:
            'Forme mit den Händen ein Dreieck unter der Brust und halte Ellbogen eng am Körper, um den Trizeps gezielt zu belasten.',
        },
        {
          name: 'Pseudo-Planche-Leans',
          reps: '4×20–30 Sek.',
          rest: 45,
          description:
            'Verlagere das Gewicht weit nach vorne über die Hände, ohne den Körper zu beugen, um Schultern und Rumpf zu stärken.',
        },
        {
          name: 'Trizeps-Dips an Bank',
          reps: '3×12–15',
          rest: 60,
          description:
            'Stütze dich mit den Händen auf einer Bank ab, senke den Körper kontrolliert ab und drücke dich kraftvoll wieder nach oben.',
        },
      ],
      cooldown: [
        {
          name: 'Kindhaltung',
          duration: 60,
          description:
            'Setze dich auf die Fersen, strecke die Arme nach vorne aus und lasse die Brust Richtung Boden sinken, um Rücken und Schultern zu entspannen.',
        },
        {
          name: 'Schulterdehnung an der Wand',
          duration: 60,
          description:
            'Lehne die Handfläche an die Wand und drehe den Oberkörper vom Arm weg, bis du eine angenehme Dehnung in Brust und Schulter spürst.',
        },
      ],
    },
    day2: {
      title: 'Core- & Mobility-Flow',
      subtitle: 'Rumpfstabilität und Beweglichkeit',
      warmup: [
        {
          name: 'Katzen-Kuh-Mobilisation',
          duration: 45,
          description:
            'Wechsle im Vierfüßlerstand zwischen einem runden Rücken und einem Hohlkreuz, um Wirbelsäule und Rumpf zu mobilisieren.',
        },
        {
          name: 'Hüftkreisen im Stand',
          duration: 30,
          description:
            'Stelle die Füße hüftbreit auf und beschreibe große Kreise mit der Hüfte, um das Becken zu lockern.',
        },
        {
          name: 'Schulterblattaktivierung an der Wand',
          duration: 45,
          description:
            'Lehne Rücken und Arme an eine Wand und schiebe die Unterarme langsam nach oben, ohne die Spannung im Rumpf zu verlieren.',
        },
      ],
      main: [
        {
          name: 'Hängendes Knieheben',
          reps: '4×10–12',
          rest: 60,
          description:
            'Hänge an einer Stange oder verwende Unterarmstützen und ziehe die Knie kontrolliert Richtung Brust, ohne zu schwingen.',
        },
        {
          name: 'Hollow-Body-Hold',
          reps: '4×25–35 Sek.',
          rest: 45,
          description:
            'Lege dich auf den Rücken, hebe Arme und Beine leicht vom Boden und halte die Lendenwirbelsäule fest auf der Matte.',
        },
        {
          name: 'Russische Twists',
          reps: '3×20 (gesamt)',
          rest: 45,
          description:
            'Setze dich leicht zurückgelehnt hin, hebe die Füße optional an und rotiere den Oberkörper abwechselnd nach links und rechts.',
        },
        {
          name: 'Plank Shoulder Taps',
          reps: '3×16 (abwechselnd)',
          rest: 45,
          description:
            'Halte eine stabile Plank-Position und tippe abwechselnd mit der rechten Hand auf die linke Schulter und umgekehrt, ohne das Becken kippen zu lassen.',
        },
        {
          name: 'Superman Holds',
          reps: '3×25–30 Sek.',
          rest: 45,
          description:
            'Lege dich auf den Bauch, hebe Arme und Beine gleichzeitig an und halte die Spannung im unteren Rücken.',
        },
      ],
      cooldown: [
        {
          name: 'Bauchdehnung im Ausfallschritt',
          duration: 60,
          description:
            'Knie dich mit einem Bein vorn in einem tiefen Ausfallschritt, schiebe die Hüfte vor und strecke den Arm der hinteren Seite nach oben.',
        },
        {
          name: 'Passive Rumpfdrehung im Liegen',
          duration: 60,
          description:
            'Lege dich auf den Rücken, ziehe ein Knie zur Brust und führe es über den Körper, während die Schultern am Boden bleiben.',
        },
      ],
    },
    day3: {
      title: 'Unterkörper-Power',
      subtitle: 'Bein- und Gesäßkraft',
      warmup: [
        {
          name: 'Kniebeugen-Mobilisation',
          duration: 45,
          description:
            'Gehe langsam in eine tiefe Kniebeuge, halte unten kurz und richte dich dann wieder auf, um Hüfte und Knie vorzubereiten.',
        },
        {
          name: 'Ausfallschritte mit Rotation',
          duration: 45,
          description:
            'Mache abwechselnd einen großen Ausfallschritt nach vorne und drehe den Oberkörper zur vorderen Seite, um Hüfte und Wirbelsäule aufzuwärmen.',
        },
        {
          name: 'Sprunggelenkskreisen',
          duration: 30,
          description:
            'Stelle den Fuß auf die Zehenkuppe und kreise das Sprunggelenk langsam, um Stabilität aufzubauen.',
        },
      ],
      main: [
        {
          name: 'Tempo-Kniebeugen',
          reps: '4×10',
          rest: 60,
          description:
            'Senke dich in 3 Sekunden ab, halte unten eine Sekunde und drücke dich kraftvoll nach oben, um maximale Kontrolle zu entwickeln.',
        },
        {
          name: 'Bulgarian Split Squats',
          reps: '3×10 je Bein',
          rest: 60,
          description:
            'Setze den hinteren Fuß erhöht auf, halte den Oberkörper aufrecht und gehe kontrolliert tief, bevor du explosiv aufstehst.',
        },
        {
          name: 'Einbeinige Glute Bridge',
          reps: '3×12 je Seite',
          rest: 45,
          description:
            'Lege dich auf den Rücken, stelle ein Bein auf und drücke die Hüfte nach oben, ohne das Becken seitlich kippen zu lassen.',
        },
        {
          name: 'Wadenheben einbeinig',
          reps: '4×15 je Seite',
          rest: 30,
          description:
            'Stehe auf einer Kante, senke die Ferse tief ab und drücke dich langsam auf die Zehenspitzen, um die Wade komplett zu aktivieren.',
        },
        {
          name: 'Sprung-Kniebeugen',
          reps: '3×12',
          rest: 60,
          description:
            'Gehe in eine tiefe Kniebeuge und springe explosiv nach oben, lande weich und gehe sofort in die nächste Wiederholung.',
        },
      ],
      cooldown: [
        {
          name: 'Sitzende Vorbeuge',
          duration: 60,
          description:
            'Setze dich mit gestreckten Beinen hin, beuge dich aus der Hüfte nach vorne und halte den Rücken so gerade wie möglich.',
        },
        {
          name: 'Liegender Figur-4-Stretch',
          duration: 60,
          description:
            'Lege dich auf den Rücken, verschränke ein Sprunggelenk über dem anderen Knie und ziehe das freie Bein behutsam zur Brust.',
        },
      ],
    },
    day4: {
      title: 'Ganzkörper-Zirkel',
      subtitle: 'Ganzkörper-Ausdauer',
      warmup: [
        {
          name: 'Jumping Jacks',
          duration: 45,
          description:
            'Springe leichtfüßig mit gespreizten Armen und Beinen und bringe sie wieder zusammen, um Herzfrequenz und Körpertemperatur zu erhöhen.',
        },
        {
          name: 'Schulterkreisen mit gestreckten Armen',
          duration: 30,
          description:
            'Strecke die Arme seitlich aus und zeichne kleine Kreise nach vorne und hinten, um die Rotatorenmanschette zu aktivieren.',
        },
        {
          name: 'Dynamische Beinpendel',
          duration: 45,
          description:
            'Halte dich an einer Wand fest und schwinge ein Bein vor und zurück sowie seitlich, um Hüftbeweglichkeit zu erhöhen.',
        },
      ],
      main: [
        {
          name: 'Burpee ohne Liegestütz',
          reps: '4×12',
          rest: 60,
          description:
            'Gehe in die Hocke, springe in den Plank, komme sofort zurück und explodiere kraftvoll in einen Strecksprung.',
        },
        {
          name: 'Pike Push-ups',
          reps: '4×8–12',
          rest: 60,
          description:
            'Hebe die Hüfte hoch, bilde ein umgedrehtes „V“ und senke den Kopf kontrolliert zwischen die Hände, um Schultern zu trainieren.',
        },
        {
          name: 'Schnelle Mountain Climbers',
          reps: '4×40 Sek.',
          rest: 45,
          description:
            'Laufe im Plank explosiv mit den Knien zur Brust und halte den Oberkörper stabil.',
        },
        {
          name: 'Plank to Push-up',
          reps: '3×14',
          rest: 45,
          description:
            'Starte im Unterarmstütz, drücke dich nacheinander mit beiden Händen in den Liegestütz hoch und senke dich kontrolliert zurück.',
        },
        {
          name: 'Reverse Snow Angels',
          reps: '3×15',
          rest: 45,
          description:
            'Lege dich auf den Bauch, hebe Brust und Arme leicht an und führe die Arme in einer großen Kreisbewegung von vorne nach hinten.',
        },
      ],
      cooldown: [
        {
          name: 'Geführte Atemzüge im Fersensitz',
          duration: 90,
          description:
            'Setze dich auf die Fersen, schließe die Augen und atme tief ein und aus, um den Puls zu senken.',
        },
        {
          name: 'Türrahmen-Brustöffnung',
          duration: 60,
          description:
            'Stelle den Unterarm im Türrahmen auf Schulterhöhe ab und lehne dich leicht nach vorne, bis eine Dehnung in Brust und Bizeps entsteht.',
        },
      ],
    },
    day5: {
      title: 'Oberkörper-Ausdauer',
      subtitle: 'Ausdauernde Zug- und Druckkraft',
      warmup: [
        {
          name: 'Leichte Band-Züge',
          duration: 45,
          description:
            'Greife ein leichtes Band, ziehe es auf Brusthöhe auseinander und halte die Schulterblätter aktiv zusammen.',
        },
        {
          name: 'Handgelenk- und Unterarmdehnung',
          duration: 45,
          description:
            'Strecke den Arm nach vorne, ziehe die Finger sanft nach unten und oben, um die Unterarme auf Belastung vorzubereiten.',
        },
        {
          name: 'Scap Pulls an der Stange',
          duration: 30,
          description:
            'Hänge dich passiv an eine Stange und ziehe die Schulterblätter aktiv nach unten, ohne die Arme zu beugen.',
        },
      ],
      main: [
        {
          name: 'Negative Klimmzüge',
          reps: '4×5 (langsam)',
          rest: 75,
          description:
            'Springe oder steige in die obere Position und senke dich in fünf Sekunden kontrolliert ab, um Zugkraft aufzubauen.',
        },
        {
          name: 'Archer Push-ups',
          reps: '3×8 je Seite',
          rest: 60,
          description:
            'Positioniere die Hände breit, verlagere das Gewicht abwechselnd auf eine Seite und halte die Hüfte stabil.',
        },
        {
          name: 'Inverted Rows unter Tisch',
          reps: '3×12',
          rest: 60,
          description:
            'Lege dich unter einen stabilen Tisch, greife die Kante und ziehe die Brust kontrolliert zur Tischkante.',
        },
        {
          name: 'Pseudo-Planche Push-ups',
          reps: '3×10',
          rest: 60,
          description:
            'Verlagere das Gewicht nach vorne, halte die Ellbogen nah am Körper und führe langsame, saubere Wiederholungen aus.',
        },
        {
          name: 'Hollow Body Rocks',
          reps: '3×20',
          rest: 45,
          description:
            'Halte eine Hollow-Position und schaukle kontrolliert vor und zurück, ohne die Spannung zu verlieren.',
        },
      ],
      cooldown: [
        {
          name: 'Lat-Dehnung im Kniestand',
          duration: 60,
          description:
            'Knie dich vor eine Bank, lege die Unterarme darauf und senke Brust und Kopf Richtung Boden, bis du eine Dehnung im Latissimus spürst.',
        },
        {
          name: 'Unterarm-Release auf dem Boden',
          duration: 60,
          description:
            'Knie dich hin, lege die Handflächen nach oben auf den Boden und lehne dich sanft nach hinten, um die Unterarme zu entlasten.',
        },
      ],
    },
    day6: {
      title: 'Power & Agilität',
      subtitle: 'Explosivität und Koordination',
      warmup: [
        {
          name: 'Hochknie-Läufe auf der Stelle',
          duration: 45,
          description:
            'Laufe mit schnellen Kniehebern auf der Stelle und halte Arme aktiv, um den Kreislauf hochzufahren.',
        },
        {
          name: 'Seitliche Ausfallschritte dynamisch',
          duration: 45,
          description:
            'Gehe abwechselnd tief in einen Seitwärtsschritt und schiebe dich explosiv zurück in die Mitte.',
        },
        {
          name: 'Seilspringen oder imaginäres Springen',
          duration: 60,
          description:
            'Springe locker aus dem Sprunggelenk, nutze ein Seil oder tue so, als ob, um Koordination und Rhythmus zu aktivieren.',
        },
      ],
      main: [
        {
          name: 'Tuck Jumps',
          reps: '4×12',
          rest: 60,
          description:
            'Springe aus einer Viertelkniebeuge explosiv nach oben und ziehe die Knie zur Brust, lande weich und kontrolliert.',
        },
        {
          name: 'Skater Sprünge',
          reps: '4×16 (abwechselnd)',
          rest: 45,
          description:
            'Springe seitlich von einem Bein aufs andere und berühre mit der freien Hand den Boden, um Stabilität zu schulen.',
        },
        {
          name: 'Explosive Liegestütze',
          reps: '4×10',
          rest: 60,
          description:
            'Drücke dich aus dem Liegestütz so kraftvoll wie möglich ab, sodass die Hände kurz den Bodenkontakt verlieren.',
        },
        {
          name: 'Bear Crawl vorwärts und rückwärts',
          reps: '3×40 Sek.',
          rest: 45,
          description:
            'Bewege dich im Vierfüßlergang langsam vorwärts und rückwärts, halte Knie knapp über dem Boden und Rumpf stabil.',
        },
        {
          name: 'Plank Jacks',
          reps: '3×40 Sek.',
          rest: 45,
          description:
            'Springe mit den Füßen im Plank abwechselnd auseinander und zusammen, ohne die Hüfte absacken zu lassen.',
        },
      ],
      cooldown: [
        {
          name: 'Tiefe Hocke mit Atemfokus',
          duration: 60,
          description:
            'Gehe in eine tiefe Hocke, halte den Rücken aufrecht und atme bewusst tief ein und aus.',
        },
        {
          name: 'Stehende Beinrückseiten-Dehnung',
          duration: 60,
          description:
            'Stelle ein Bein nach vorne auf die Ferse, beuge dich mit geradem Rücken aus der Hüfte nach unten und halte die Dehnung.',
        },
      ],
    },
    day7: {
      title: 'Ruhetag – Aktive Erholung',
      subtitle: 'Lockere Bewegung & Regeneration',
      isRestDay: true,
      warmup: [],
      main: [
        {
          name: 'Sanfte Mobilisation der Wirbelsäule',
          duration: 300,
          description:
            'Führe langsame Katzen-Kuh-Bewegungen, Beckenkippen und Schulterrollen aus, um Verspannungen zu lösen.',
        },
        {
          name: '20-minütiger Spaziergang',
          duration: 1200,
          description:
            'Gehe in entspanntem Tempo an der frischen Luft, fokussiere dich auf tiefe Atemzüge und lockere Arme.',
        },
      ],
      cooldown: [
        {
          name: 'Geführte Atemmeditation im Liegen',
          duration: 300,
          description:
            'Lege dich auf den Rücken, schließe die Augen und konzentriere dich fünf Minuten lang auf gleichmäßige Bauchatmung.',
        },
      ],
    },
  },
  week2: {
    title: 'Aufbau & Progression',
    quote:
      'Vertiefe deine Routinen: Mehr Volumen, kontrollierte Progression und saubere Ausführung.',
  },
  week3: {
    title: 'Intensität steigern',
    quote:
      'Neue Reize setzen: Schwierige Variationen und längere Haltezeiten warten auf dich.',
  },
  week4: {
    title: 'Skill & Mastery',
    quote:
      'Feinschliff und Tests: Zeige, was du gelernt hast, und setze persönliche Highlights.',
  },
}

export default workoutProgram
