/**
 * Strukturierte Trainingsdaten für das 4-Wochen-Calisthenics-Programm.
 * Alle Texte sind auf Deutsch verfasst und decken das komplette 28-Tage-Programm
 * mit progressiver Steigerung von Woche 1 bis Woche 4 ab.
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
    day1: {
      title: 'Push-Power Evolution',
      subtitle: 'Erweiterte Druckkraft und Stabilität',
      warmup: [
        {
          name: 'Armkreisen mit Widerstand',
          duration: 45,
          description:
            'Nutze ein Band oder stelle dir vor, gegen Widerstand zu kreisen. Aktiviere Schultern und Rotatorenmanschette intensiver.',
        },
        {
          name: 'Scapula Wall Slides',
          duration: 60,
          description:
            'Lehne dich mit dem Rücken an die Wand, führe die Arme in W-Y-Position und aktiviere die Schulterblätter bewusst.',
        },
        {
          name: 'Dynamische Liegestütz-Prep',
          duration: 45,
          description:
            'Gehe in Plank-Position und rocke vor und zurück, um Handgelenke und Schultern auf Belastung vorzubereiten.',
        },
      ],
      main: [
        {
          name: 'Standard-Liegestütze',
          reps: '4×10–15',
          rest: 60,
          description:
            'Mehr Volumen als Woche 1. Fokus auf explosive Aufwärtsbewegung, kontrollierte Abwärtsbewegung.',
        },
        {
          name: 'Wide-Grip Liegestütze',
          reps: '3×8–12',
          rest: 60,
          description:
            'Hände breiter als Schulterbreit positionieren. Aktiviert stärker die äußere Brust und vordere Schultern.',
        },
        {
          name: 'Pike Push-ups',
          reps: '4×8–12',
          rest: 60,
          description:
            'Hüfte nach oben, Körper im umgedrehten V. Trainiert Schultern vertikal. Vorbereitung für Handstand Push-ups.',
        },
        {
          name: 'Archer Push-ups (assisted)',
          reps: '3×6–8 je Seite',
          rest: 75,
          description:
            'Gewicht auf eine Seite verlagern, anderen Arm gestreckt halten. Bei Bedarf Knie absetzen für Unterstützung.',
        },
        {
          name: 'Tricep Dips (elevated)',
          reps: '4×12–18',
          rest: 60,
          description:
            'Füße auf erhöhter Oberfläche für mehr Schwierigkeit. Volle Range of Motion anstreben.',
        },
        {
          name: 'Planche Lean Holds',
          reps: '4×30–45 Sek.',
          rest: 45,
          description:
            'Länger als Woche 1. Gewicht weit nach vorn verlagern, Körper gerade halten.',
        },
      ],
      cooldown: [
        {
          name: 'Deep Shoulder Stretch',
          duration: 90,
          description:
            'Intensivere Dehnung als Woche 1. Arm über den Körper führen und mit dem anderen Arm ziehen.',
        },
        {
          name: 'Chest Doorway Stretch',
          duration: 90,
          description:
            'Beide Arme im Türrahmen positionieren, Schritt nach vorn für tiefe Brustdehnung.',
        },
      ],
    },
    day2: {
      title: 'Core Intensität',
      subtitle: 'Erweiterte Rumpfkraft und Kontrolle',
      warmup: [
        {
          name: 'Dynamic Cat-Cow Flow',
          duration: 60,
          description:
            'Fließende Katzen-Kuh-Bewegung mit bewusster Atmung. Wirbelsäule in alle Richtungen mobilisieren.',
        },
        {
          name: 'Hip Circles & Leg Swings',
          duration: 45,
          description:
            'Hüftkreise gefolgt von dynamischen Beinschwüngen vor-zurück und seitlich.',
        },
        {
          name: 'Plank to Downward Dog',
          duration: 45,
          description:
            'Zwischen Plank und herabschauendem Hund wechseln, um Core und Schultern zu aktivieren.',
        },
      ],
      main: [
        {
          name: 'Hanging Knee Raises',
          reps: '4×12–15',
          rest: 60,
          description:
            'Mehr Wiederholungen als Woche 1. Knie zur Brust ziehen ohne Schwung.',
        },
        {
          name: 'L-Sit Progression (Bent Knee)',
          reps: '4×15–25 Sek.',
          rest: 60,
          description:
            'Auf Parallettes oder stabilen Stühlen. Knie angewinkelt halten, Körper zwischen den Armen schweben.',
        },
        {
          name: 'Hollow Body Rocks',
          reps: '4×20–25',
          rest: 45,
          description:
            'Hollow Position halten und kontrolliert vor-zurück rocken.',
        },
        {
          name: 'Russian Twists (weighted)',
          reps: '4×30 (gesamt)',
          rest: 45,
          description:
            'Mit Wasserflaschen oder anderem Gewicht für erhöhte Intensität.',
        },
        {
          name: 'Dragon Flags (negative)',
          reps: '3×5–8',
          rest: 75,
          description:
            'Nur die Abwärtsbewegung kontrollieren, auf Bank oder stabiler Oberfläche.',
        },
        {
          name: 'Plank Variations Flow',
          reps: '3×45–60 Sek.',
          rest: 45,
          description:
            'Standard Plank → Side Planks → Plank mit Shoulder Taps. Kontinuierlicher Wechsel.',
        },
      ],
      cooldown: [
        {
          name: 'Cobra to Child\'s Pose Flow',
          duration: 120,
          description:
            'Wechsel zwischen Kobra (Rückenbeuge) und Kindhaltung (Rückenstreckung) für komplette Entspannung.',
        },
        {
          name: 'Seated Spinal Twist',
          duration: 90,
          description:
            'Sitzend, ein Bein angewinkelt über das andere, Rotation zur angewinkelten Seite.',
        },
      ],
    },
    day3: {
      title: 'Lower Body Power',
      subtitle: 'Explosive Beinkraft und Stabilität',
      warmup: [
        {
          name: 'Dynamic Squats',
          duration: 60,
          description:
            'Schnelle, rhythmische Kniebeugen um Beinmuskulatur und Herz-Kreislauf aufzuwärmen.',
        },
        {
          name: 'Lateral Lunges',
          duration: 45,
          description:
            'Seitliche Ausfallschritte für Hüftmobilität und Adduktoren-Aktivierung.',
        },
        {
          name: 'Calf Raises to Toe Walks',
          duration: 45,
          description:
            'Wadenheben gefolgt von Gehen auf Zehenspitzen für Sprunggelenk-Vorbereitung.',
        },
      ],
      main: [
        {
          name: 'Jump Squats',
          reps: '4×15–20',
          rest: 60,
          description:
            'Explosive Sprungkniebeugen. Volle Extension in der Luft, weiche Landung.',
        },
        {
          name: 'Pistol Squat Progression',
          reps: '3×8–12 je Bein',
          rest: 75,
          description:
            'Einbeinige Kniebeuge mit Unterstützung (Box, TRX oder Wand). Langsam und kontrolliert.',
        },
        {
          name: 'Bulgarian Split Squats (elevated)',
          reps: '4×12–15 je Bein',
          rest: 60,
          description:
            'Hinterer Fuß höher als Woche 1. Tiefe Range of Motion für maximale Aktivierung.',
        },
        {
          name: 'Single Leg Romanian Deadlifts',
          reps: '3×10–12 je Bein',
          rest: 60,
          description:
            'Einbeiniger Deadlift-Pattern. Fokus auf Gesäß und hintere Oberschenkel.',
        },
        {
          name: 'Broad Jumps',
          reps: '4×8–10',
          rest: 75,
          description:
            'Weite Sprünge nach vorn. Maximale Explosivität, kontrollierte Landung.',
        },
        {
          name: 'Wall Sit Challenge',
          reps: '3×60–90 Sek.',
          rest: 60,
          description:
            'Längere Haltezeiten als typisch. Mentale und physische Ausdauer.',
        },
      ],
      cooldown: [
        {
          name: 'Deep Hip Flexor Stretch',
          duration: 120,
          description:
            'Tiefer Ausfallschritt mit Hüftvorschieben. Beide Seiten ausgiebig dehnen.',
        },
        {
          name: 'Pigeon Pose',
          duration: 120,
          description:
            'Yoga-Position für tiefe Hüftöffnung und Gesäßdehnung.',
        },
      ],
    },
    day4: {
      title: 'Metabolic Circuit',
      subtitle: 'Kondition und Ganzkörper-Power',
      warmup: [
        {
          name: 'Burpee Breakdown',
          duration: 60,
          description:
            'Langsame Burpee-Bewegungen aufschlüsseln: Squat → Plank → Squat → Jump. Alle Bewegungsmuster vorbereiten.',
        },
        {
          name: 'Arm Swings & Leg Kicks',
          duration: 45,
          description:
            'Große Arm- und Beinbewegungen für komplette Körpererwärmung.',
        },
        {
          name: 'Shadow Boxing',
          duration: 45,
          description:
            'Leichte Boxbewegungen für Koordination und Herzfrequenz.',
        },
      ],
      main: [
        {
          name: 'Full Burpees',
          reps: '5×12–15',
          rest: 60,
          description:
            'Komplette Burpees mit Liegestütz und Sprung. Höhere Intensität als Woche 1.',
        },
        {
          name: 'Mountain Climber Sprints',
          reps: '5×30 Sek.',
          rest: 30,
          description:
            'Maximale Geschwindigkeit für 30 Sekunden, kurze Pause.',
        },
        {
          name: 'Squat Thrust to Tuck Jump',
          reps: '4×10–12',
          rest: 60,
          description:
            'Squat Thrust gefolgt von Tuck Jump. Explosive Kombination.',
        },
        {
          name: 'Bear Crawl Complex',
          reps: '4×45 Sek.',
          rest: 45,
          description:
            'Vorwärts, rückwärts, seitlich krabbeln. Kontinuierliche Bewegung.',
        },
        {
          name: 'High-Intensity Tabata',
          reps: '4 Minuten (20s on/10s off)',
          rest: 120,
          description:
            'Wechsel zwischen: Jump Squats, Push-ups, Mountain Climbers, Plank Jacks.',
        },
      ],
      cooldown: [
        {
          name: 'Complete Body Flow',
          duration: 180,
          description:
            'Fließende Bewegung durch alle großen Muskelgruppen: Forward Fold → Cobra → Child\'s Pose → Rotation.',
        },
        {
          name: 'Breath Focus Recovery',
          duration: 120,
          description:
            'Bewusste Atmung zur Herzfrequenz-Normalisierung. 4 Sekunden ein, 6 Sekunden aus.',
        },
      ],
    },
    day5: {
      title: 'Pull & Skill Development',
      subtitle: 'Zugkraft und Skill-Vorbereitung',
      warmup: [
        {
          name: 'Band Pull-Aparts',
          duration: 60,
          description:
            'Widerstandsband vor der Brust auseinanderziehen. Rhomboids und hintere Schultern aktivieren.',
        },
        {
          name: 'Arm Hangs (passive/active)',
          duration: 45,
          description:
            'Passives Hängen gefolgt von aktivem Schulterblatt-Zusammenziehen an der Stange.',
        },
        {
          name: 'Wrist & Forearm Prep',
          duration: 45,
          description:
            'Intensivere Handgelenk-Vorbereitung für erweiterte Griff-Arbeit.',
        },
      ],
      main: [
        {
          name: 'Pull-up Progressions',
          reps: '5×6–10',
          rest: 90,
          description:
            'Je nach Level: Assisted, Negative oder volle Pull-ups. Fokus auf saubere Form.',
        },
        {
          name: 'Commando Pull-ups',
          reps: '3×6–8',
          rest: 75,
          description:
            'Abwechselnd links und rechts von der Stange hochziehen. Unilaterale Kraft.',
        },
        {
          name: 'Inverted Rows (feet elevated)',
          reps: '4×12–15',
          rest: 60,
          description:
            'Füße höher positionieren für erhöhte Schwierigkeit.',
        },
        {
          name: 'One-Arm Push-up Progression',
          reps: '3×6–8 je Seite',
          rest: 75,
          description:
            'Mit Unterstützung (erhöhte Position oder leichter Fingerkontakt).',
        },
        {
          name: 'Typewriter Pull-ups',
          reps: '3×8–10',
          rest: 75,
          description:
            'Von der Stange hängend, seitlich von einer Hand zur anderen gleiten.',
        },
        {
          name: 'Hollow to Arch Rocks',
          reps: '4×15–20',
          rest: 45,
          description:
            'Zwischen Hollow Body und Arch Position wechseln. Dynamische Rumpfkraft.',
        },
      ],
      cooldown: [
        {
          name: 'Overhead Shoulder Stretch',
          duration: 120,
          description:
            'Intensive Schulterdehnung über Kopf mit Wand oder Partner-Unterstützung.',
        },
        {
          name: 'Lat & Rhomboid Release',
          duration: 120,
          description:
            'Kombination aus Lat-Dehnung und Rhomboid-Release für komplette hintere Kette.',
        },
      ],
    },
    day6: {
      title: 'Power & Agility Plus',
      subtitle: 'Explosivität und athletische Performance',
      warmup: [
        {
          name: 'Dynamic Movement Flow',
          duration: 90,
          description:
            'Komplexer Movement Flow: Squat → Lunge → Crawl → Jump. Alle Bewegungsmuster integrieren.',
        },
        {
          name: 'Plyometric Prep',
          duration: 60,
          description:
            'Leichte Sprungbewegungen zur Vorbereitung auf explosive Übungen.',
        },
      ],
      main: [
        {
          name: 'Box Jump Progression',
          reps: '4×10–12',
          rest: 75,
          description:
            'Auf stabile erhöhte Oberfläche springen. Fokus auf sichere Landung.',
        },
        {
          name: 'Lateral Bounds',
          reps: '4×12–16',
          rest: 60,
          description:
            'Seitliche explosive Sprünge von einem Bein zum anderen.',
        },
        {
          name: 'Clapping Push-ups',
          reps: '4×8–10',
          rest: 75,
          description:
            'Explosive Push-ups mit Händeklatschen in der Luft.',
        },
        {
          name: 'Single Leg Bounds',
          reps: '3×10 je Bein',
          rest: 60,
          description:
            'Einbeinige Sprünge nach vorn für maximale Power-Entwicklung.',
        },
        {
          name: 'Agility Ladder Pattern',
          reps: '4×60 Sek.',
          rest: 45,
          description:
            'Schnelle Fußarbeit (imaginäre Leiter): In-In-Out-Out, Lateral Steps, etc.',
        },
        {
          name: 'Explosive Star Jumps',
          reps: '4×15–20',
          rest: 45,
          description:
            'Maximale Arm- und Beinstreckung in der Luft. Ganzkörper-Explosivität.',
        },
      ],
      cooldown: [
        {
          name: 'Dynamic Stretching Flow',
          duration: 180,
          description:
            'Fließende dynamische Dehnungen für alle beanspruchten Muskelgruppen.',
        },
        {
          name: 'Relaxation Sequence',
          duration: 120,
          description:
            'Progressive Muskelentspannung von den Zehen bis zum Kopf.',
        },
      ],
    },
    day7: {
      title: 'Aktive Regeneration Plus',
      subtitle: 'Erweiterte Erholung & Mobility',
      isRestDay: true,
      warmup: [],
      main: [
        {
          name: 'Extended Mobility Flow',
          duration: 600,
          description:
            'Umfangreicher Mobility Flow für alle Gelenke. Yoga-inspirierte Sequenzen für komplette Körperöffnung.',
        },
        {
          name: 'Recovery Walk/Light Jog',
          duration: 1800,
          description:
            'Längere Aktivität als Woche 1. Leichtes Joggen oder zügiges Gehen für aktive Regeneration.',
        },
        {
          name: 'Foam Rolling (imagined)',
          duration: 300,
          description:
            'Selbstmassage-Techniken auch ohne Equipment. Druck mit Händen auf verspannte Bereiche.',
        },
      ],
      cooldown: [
        {
          name: 'Extended Meditation',
          duration: 600,
          description:
            'Längere Meditation als Woche 1. Fokus auf Körperwahrnehmung und mentale Regeneration.',
        },
      ],
    },
  },
  week3: {
    title: 'Intensität steigern',
    quote:
      'Neue Reize setzen: Schwierige Variationen und längere Haltezeiten warten auf dich.',
    day1: {
      title: 'Advanced Push Patterns',
      subtitle: 'Meistere schwere Druckvariationen',
      warmup: [
        {
          name: 'Handstand Wall Walk Prep',
          duration: 60,
          description:
            'Hände an der Wand, Füße langsam höher gehen. Vorbereitung auf Handstand-Arbeit.',
        },
        {
          name: 'Hollow Body to Handstand Shape',
          duration: 60,
          description:
            'Von Hollow Body in Handstand-Form wechseln, um Körperspannung aufzubauen.',
        },
        {
          name: 'Wrist Strength Circles',
          duration: 45,
          description:
            'Intensive Handgelenk-Vorbereitung für schwere Handstand- und Planche-Arbeit.',
        },
      ],
      main: [
        {
          name: 'Handstand Push-ups (wall assisted)',
          reps: '4×6–10',
          rest: 90,
          description:
            'Mit Wand als Stütze. Kopf berührt leicht den Boden, dann explosiv nach oben drücken.',
        },
        {
          name: 'Archer Push-ups (full)',
          reps: '4×8–10 je Seite',
          rest: 75,
          description:
            'Ohne Unterstützung. Ein Arm trägt Hauptlast, der andere gestreckt zur Seite.',
        },
        {
          name: 'Pseudo-Planche Push-ups',
          reps: '4×8–12',
          rest: 75,
          description:
            'Hände weiter nach hinten positioniert als normale Push-ups. Extrem schwere Variante.',
        },
        {
          name: 'One-Arm Push-up Progressions',
          reps: '3×5–8 je Seite',
          rest: 90,
          description:
            'Weniger Unterstützung als Woche 2. Ziel: vollständige einarmige Push-ups.',
        },
        {
          name: 'Planche Leans (advanced)',
          reps: '4×45–60 Sek.',
          rest: 60,
          description:
            'Länger und weiter nach vorn geneigt als vorherige Wochen.',
        },
        {
          name: 'Ring/TRX Push-ups',
          reps: '3×12–15',
          rest: 60,
          description:
            'Instabile Oberfläche für erhöhte Schwierigkeit und Stabilisationsarbeit.',
        },
      ],
      cooldown: [
        {
          name: 'Deep Shoulder & Wrist Release',
          duration: 180,
          description:
            'Intensive Dehnung nach schwerer Handstand- und Planche-Arbeit.',
        },
        {
          name: 'Thoracic Spine Mobility',
          duration: 120,
          description:
            'Brustwirbelsäule mobilisieren nach intensiver Schulterarbeit.',
        },
      ],
    },
    day2: {
      title: 'Core Mastery',
      subtitle: 'Erweiterte Rumpfkraft und Kontrolle',
      warmup: [
        {
          name: 'L-Sit Progression Prep',
          duration: 60,
          description:
            'Stützkraft-Aufbau auf Parallettes oder stabilen Oberflächen.',
        },
        {
          name: 'V-Up to Hollow Rock',
          duration: 60,
          description:
            'Dynamische Core-Aktivierung mit V-Ups gefolgt von Hollow Body Rocks.',
        },
        {
          name: 'Hanging Prep',
          duration: 45,
          description:
            'Griffkraft und Schulter-Stabilität für erweiterte hängende Übungen.',
        },
      ],
      main: [
        {
          name: 'L-Sit (full)',
          reps: '5×20–40 Sek.',
          rest: 75,
          description:
            'Gestreckte Beine parallel zum Boden halten. Ultimative Core-Übung.',
        },
        {
          name: 'Hanging Leg Raises to L-Sit',
          reps: '4×10–12',
          rest: 75,
          description:
            'Beine zur L-Sit Position anheben und kurz halten.',
        },
        {
          name: 'Dragon Flags (full)',
          reps: '4×8–12',
          rest: 90,
          description:
            'Komplette Dragon Flag Bewegung: hoch und kontrolliert runter.',
        },
        {
          name: 'Windshield Wipers',
          reps: '3×12–16',
          rest: 60,
          description:
            'Hängend, Beine von einer Seite zur anderen wie Scheibenwischer bewegen.',
        },
        {
          name: 'Human Flag Progression',
          reps: '3×15–30 Sek. je Seite',
          rest: 90,
          description:
            'Seitlich an vertikaler Stange. Körper horizontal halten (mit Unterstützung wenn nötig).',
        },
        {
          name: 'V-Ups to Pike',
          reps: '4×15–20',
          rest: 45,
          description:
            'V-Up Bewegung bis zur Pike-Position. Maximale Range of Motion.',
        },
      ],
      cooldown: [
        {
          name: 'Extended Spinal Decompression',
          duration: 180,
          description:
            'Passive Hängen oder Rückenlage mit Beinwand für Wirbelsäulen-Entlastung.',
        },
        {
          name: 'Hip Flexor Deep Release',
          duration: 150,
          description:
            'Intensive Hip Flexor Dehnung nach schwerer Core-Arbeit.',
        },
      ],
    },
    day3: {
      title: 'Unilateral Power',
      subtitle: 'Einbeinige Kraft und Balance',
      warmup: [
        {
          name: 'Single Leg Balance Challenge',
          duration: 60,
          description:
            'Augen geschlossen auf einem Bein stehen. Balance und Propriozeption schulen.',
        },
        {
          name: 'Dynamic Single Leg Movements',
          duration: 60,
          description:
            'Einbeinige Kniebeugen, Lunges und Leg Swings zur Vorbereitung.',
        },
        {
          name: 'Cossack Squat Prep',
          duration: 45,
          description:
            'Tiefe seitliche Squats für Hüftmobilität und Adduktoren-Vorbereitung.',
        },
      ],
      main: [
        {
          name: 'Pistol Squats (full)',
          reps: '4×8–12 je Bein',
          rest: 90,
          description:
            'Vollständige einbeinige Kniebeugen ohne Unterstützung. Ultimative Beinübung.',
        },
        {
          name: 'Shrimp Squats',
          reps: '3×6–8 je Bein',
          rest: 90,
          description:
            'Rückwärtige einbeinige Kniebeuge. Ein Bein nach hinten angewinkelt halten.',
        },
        {
          name: 'Single Leg Deadlift to Knee Drive',
          reps: '4×10–12 je Bein',
          rest: 60,
          description:
            'Einbeiniger Deadlift gefolgt von explosivem Kniehub.',
        },
        {
          name: 'Lateral Pistol Squats',
          reps: '3×8–10 je Bein',
          rest: 75,
          description:
            'Seitliche einbeinige Kniebeugen. Cossack Squat zur vollen Tiefe.',
        },
        {
          name: 'Single Leg Box Step-ups (high)',
          reps: '4×12–15 je Bein',
          rest: 60,
          description:
            'Auf hohe stabile Oberfläche steigen, kontrolliert absteigen.',
        },
        {
          name: 'Single Leg Calf Raise to Hold',
          reps: '4×15 + 20 Sek. Hold je Seite',
          rest: 45,
          description:
            'Wadenheben mit anschließendem statischen Halten auf Zehenspitzen.',
        },
      ],
      cooldown: [
        {
          name: 'Deep Hip Opening Sequence',
          duration: 240,
          description:
            'Umfassende Hüftöffnung: Pigeon, Figure-4, Deep Lunge Holds.',
        },
        {
          name: 'Single Leg Relaxation',
          duration: 120,
          description:
            'Bewusste Entspannung jedes Beins einzeln für neuronale Regeneration.',
        },
      ],
    },
    day4: {
      title: 'High-Intensity Complex',
      subtitle: 'Maximale Intensität und Kondition',
      warmup: [
        {
          name: 'Full-Body Activation Circuit',
          duration: 120,
          description:
            'Intensiver Warm-up Circuit: Squats, Push-ups, Mountain Climbers, Jumping Jacks in schneller Folge.',
        },
        {
          name: 'Movement Preparation',
          duration: 60,
          description:
            'Alle Hauptbewegungen der Session in langsamer Geschwindigkeit durchgehen.',
        },
      ],
      main: [
        {
          name: 'Complex Circuit A',
          reps: '5 Runden × 8 Min.',
          rest: 120,
          description:
            '1 Min. Burpees → 1 Min. Pull-ups → 1 Min. Jump Squats → 1 Min. Push-ups → 4 Min. aktive Pause',
        },
        {
          name: 'Complex Circuit B',
          reps: '4 Runden × 10 Min.',
          rest: 90,
          description:
            '2 Min. EMOM: Gerade Min. = 10 Burpees, Ungerade Min. = 15 Jump Squats → 2 Min. Pause',
        },
        {
          name: 'Finisher Challenge',
          reps: '100 Reps total',
          rest: 0,
          description:
            '100 Reps so schnell wie möglich: 25 Push-ups, 25 Squats, 25 Mountain Climbers, 25 Burpees.',
        },
      ],
      cooldown: [
        {
          name: 'Complete Cool-down Flow',
          duration: 300,
          description:
            'Umfassender Cool-down nach Hochintensitäts-Training: Stretching, Breathing, Relaxation.',
        },
        {
          name: 'Heart Rate Recovery',
          duration: 180,
          description:
            'Bewusste Atmung und leichte Bewegung zur Herzfrequenz-Normalisierung.',
        },
      ],
    },
    day5: {
      title: 'Advanced Pull & Skills',
      subtitle: 'Meistere schwere Zugübungen',
      warmup: [
        {
          name: 'Advanced Shoulder Prep',
          duration: 90,
          description:
            'Intensive Schulter-Vorbereitung für schwere Klimmzug-Variationen und Skills.',
        },
        {
          name: 'Grip Strength Activation',
          duration: 60,
          description:
            'Griffkraft-Aufbau und Unterarm-Aktivierung für erweiterte hängende Übungen.',
        },
      ],
      main: [
        {
          name: 'Weighted Pull-ups',
          reps: '4×8–10',
          rest: 120,
          description:
            'Mit zusätzlichem Gewicht (Rucksack mit Büchern/Wasserflaschen).',
        },
        {
          name: 'Muscle-ups (assisted)',
          reps: '3×5–8',
          rest: 120,
          description:
            'Kombination aus Pull-up und Dip. Mit Unterstützung wenn nötig.',
        },
        {
          name: 'One-Arm Hang Progression',
          reps: '3×20–40 Sek. je Arm',
          rest: 90,
          description:
            'Einarmiges Hängen an der Stange. Ultimative Griffkraft.',
        },
        {
          name: 'Archer Pull-ups',
          reps: '4×6–8 je Seite',
          rest: 90,
          description:
            'Zur einen Seite hochziehen, anderen Arm gestreckt lassen.',
        },
        {
          name: 'Front Lever Progression',
          reps: '4×20–40 Sek.',
          rest: 75,
          description:
            'Körper horizontal unter der Stange halten. Mit angewinkelten Beinen beginnen.',
        },
        {
          name: 'Typewriter Pull-ups (advanced)',
          reps: '3×10–12',
          rest: 75,
          description:
            'Seitliches Gleiten an der Stange mit mehr Range of Motion.',
        },
      ],
      cooldown: [
        {
          name: 'Comprehensive Upper Body Release',
          duration: 240,
          description:
            'Vollständige Oberkörper-Entspannung nach intensiver Zugarbeit.',
        },
        {
          name: 'Grip and Forearm Recovery',
          duration: 120,
          description:
            'Spezielle Entspannung für Unterarme und Griffmuskulatur.',
        },
      ],
    },
    day6: {
      title: 'Skill Integration',
      subtitle: 'Kombinierte Skills und Flow',
      warmup: [
        {
          name: 'Flow Movement Prep',
          duration: 120,
          description:
            'Fließende Bewegungssequenzen zur Vorbereitung auf komplexe Skill-Kombinationen.',
        },
      ],
      main: [
        {
          name: 'Handstand Flow',
          reps: '4×60 Sek.',
          rest: 90,
          description:
            'Handstand gegen Wand → freier Handstand-Versuch → Handstand Push-up.',
        },
        {
          name: 'L-Sit to Handstand Transition',
          reps: '3×8–10',
          rest: 120,
          description:
            'Von L-Sit versuchen in Handstand zu drücken (sehr schwer, Progression okay).',
        },
        {
          name: 'Burpee to Pull-up Flow',
          reps: '4×12–15',
          rest: 75,
          description:
            'Burpee direkt gefolgt von Pull-up ohne Pause.',
        },
        {
          name: 'Pistol Squat to Jump',
          reps: '3×10 je Bein',
          rest: 60,
          description:
            'Pistol Squat mit explosivem Sprung am Ende.',
        },
        {
          name: 'Complex Movement Flow',
          reps: '3×2 Min.',
          rest: 120,
          description:
            'Freie Kombination aller erlernten Skills in fließender Bewegung.',
        },
      ],
      cooldown: [
        {
          name: 'Integration Stretching',
          duration: 300,
          description:
            'Dehnung aller in den Skills verwendeten Muskelgruppen.',
        },
      ],
    },
    day7: {
      title: 'Recovery & Reflection',
      subtitle: 'Regeneration und Fortschritts-Reflexion',
      isRestDay: true,
      warmup: [],
      main: [
        {
          name: 'Skill Review Session',
          duration: 900,
          description:
            'Leichte Wiederholung aller Skills der Woche in entspanntem Tempo zur Bewegungsqualitäts-Verbesserung.',
        },
        {
          name: 'Long Recovery Walk',
          duration: 2400,
          description:
            'Ausgedehnter Spaziergang oder sehr leichtes Joggen für aktive Regeneration.',
        },
        {
          name: 'Self-Assessment',
          duration: 600,
          description:
            'Bewusste Körperwahrnehmung: Welche Bereiche brauchen Aufmerksamkeit? Fortschritte reflektieren.',
        },
      ],
      cooldown: [
        {
          name: 'Deep Relaxation',
          duration: 900,
          description:
            'Umfassende Entspannung und mentale Vorbereitung auf die finale Woche.',
        },
      ],
    },
  },
  week4: {
    title: 'Skill & Mastery',
    quote:
      'Feinschliff und Tests: Zeige, was du gelernt hast, und setze persönliche Highlights.',
    day1: {
      title: 'Ultimate Push Challenge',
      subtitle: 'Maximale Druckkraft-Demonstration',
      warmup: [
        {
          name: 'Competition-Style Warm-up',
          duration: 120,
          description:
            'Intensiver Warm-up wie vor einem Wettkampf. Alle Bewegungen der Session vorbereiten.',
        },
        {
          name: 'Handstand Mastery Prep',
          duration: 90,
          description:
            'Ausgiebige Handstand-Vorbereitung für maximale Performance.',
        },
      ],
      main: [
        {
          name: 'One-Arm Push-up Challenge',
          reps: 'Max Reps je Arm',
          rest: 180,
          description:
            'Teste deine maximalen einarmigen Push-ups. Dokumentiere den Fortschritt.',
        },
        {
          name: 'Handstand Push-up Max Test',
          reps: 'Max Reps',
          rest: 180,
          description:
            'Maximale Anzahl Handstand Push-ups gegen die Wand.',
        },
        {
          name: 'Planche Hold Challenge',
          reps: 'Max Hold Time',
          rest: 120,
          description:
            'Längste Planche-Haltezeit die du schaffen kannst.',
        },
        {
          name: 'Advanced Push-up Pyramid',
          reps: '1-2-3-4-5-4-3-2-1',
          rest: 30,
          description:
            'Pyramide mit schwersten Push-up Variante die du beherrschst.',
        },
        {
          name: 'Freestyle Push Challenge',
          reps: '5 Min. AMRAP',
          rest: 0,
          description:
            '5 Minuten so viele Push-ups wie möglich (jede Variante erlaubt).',
        },
      ],
      cooldown: [
        {
          name: 'Championship Cool-down',
          duration: 300,
          description:
            'Umfassende Entspannung nach maximaler Anstrengung.',
        },
      ],
    },
    day2: {
      title: 'Core Supremacy',
      subtitle: 'Ultimative Rumpfkraft-Prüfung',
      warmup: [
        {
          name: 'Core Mastery Activation',
          duration: 120,
          description:
            'Schrittweise Aktivierung aller Core-Muskeln für Höchstleistung.',
        },
      ],
      main: [
        {
          name: 'L-Sit Max Hold',
          reps: 'Max Hold Time',
          rest: 180,
          description:
            'Längste L-Sit Haltezeit die du erreichen kannst.',
        },
        {
          name: 'Human Flag Challenge',
          reps: 'Max Hold je Seite',
          rest: 180,
          description:
            'Teste deine Human Flag Haltezeit (jeder Progressionsgrad zählt).',
        },
        {
          name: 'Dragon Flag Mastery',
          reps: 'Max Reps',
          rest: 120,
          description:
            'Maximale Anzahl perfekter Dragon Flags.',
        },
        {
          name: 'Core Endurance Test',
          reps: '10 Min. EMOM',
          rest: 0,
          description:
            'Jede Minute: 30 Sek. Hollow Hold + 30 Sek. aktive Pause.',
        },
        {
          name: 'Ultimate Core Complex',
          reps: '3 Runden',
          rest: 120,
          description:
            'L-Sit 30s → Dragon Flag 10x → Human Flag 20s → Hollow Rock 30x ohne Pause zwischen Übungen.',
        },
      ],
      cooldown: [
        {
          name: 'Deep Core Release',
          duration: 300,
          description:
            'Intensive Entspannung nach ultimativer Core-Herausforderung.',
        },
      ],
    },
    day3: {
      title: 'Leg Power Finale',
      subtitle: 'Explosive Beinkraft auf höchstem Niveau',
      warmup: [
        {
          name: 'Power Movement Preparation',
          duration: 120,
          description:
            'Intensive Vorbereitung auf maximale Beinpower-Demonstration.',
        },
      ],
      main: [
        {
          name: 'Pistol Squat Marathon',
          reps: '50 total (25 je Bein)',
          rest: 120,
          description:
            'Ultimativer Pistol Squat Test. Pause nur wenn absolut nötig.',
        },
        {
          name: 'Jump Height Challenge',
          reps: 'Max Height × 10',
          rest: 90,
          description:
            'Springe so hoch wie möglich. 10 Versuche für persönlichen Rekord.',
        },
        {
          name: 'Single Leg Endurance',
          reps: '5 Min. je Bein',
          rest: 60,
          description:
            'Kontinuierliche einbeinige Bewegungen: Squats, Calf Raises, Lunges.',
        },
        {
          name: 'Broad Jump Distance',
          reps: 'Max Distance × 5',
          rest: 90,
          description:
            'Weitsprung-Wettkampf mit dir selbst. Dokumentiere die beste Weite.',
        },
        {
          name: 'Leg Power Finisher',
          reps: '100 Jump Squats',
          rest: 0,
          description:
            '100 Jump Squats so schnell wie möglich. Zeit stoppen.',
        },
      ],
      cooldown: [
        {
          name: 'Leg Recovery Protocol',
          duration: 360,
          description:
            'Umfassende Bein- und Hüftentspannung nach maximaler Belastung.',
        },
      ],
    },
    day4: {
      title: 'The Gauntlet',
      subtitle: 'Ultimative Ganzkörper-Herausforderung',
      warmup: [
        {
          name: 'Warrior Preparation',
          duration: 180,
          description:
            'Intensive mentale und körperliche Vorbereitung auf die härteste Session.',
        },
      ],
      main: [
        {
          name: 'The Calisthenics Gauntlet',
          reps: '1 Durchgang',
          rest: 0,
          description:
            'Ohne Pause: 50 Push-ups → 50 Squats → 25 Pull-ups → 50 Burpees → 2 Min. L-Sit → 100 Mountain Climbers',
        },
        {
          name: 'Recovery Round',
          reps: '5 Min.',
          rest: 0,
          description:
            'Leichte Bewegung zur Erholung nach dem Gauntlet.',
        },
        {
          name: 'Skills Showcase',
          reps: '10 Min. Freestyle',
          rest: 0,
          description:
            'Zeige alle Skills die du gelernt hast in einer frei gewählten Kombination.',
        },
        {
          name: 'Final Challenge',
          reps: 'Personal Choice',
          rest: 0,
          description:
            'Wähle selbst eine finale Herausforderung basierend auf deinen Stärken.',
        },
      ],
      cooldown: [
        {
          name: 'Victory Cool-down',
          duration: 600,
          description:
            'Ausgiebige Entspannung nach dem ultimativen Test. Du hast es geschafft!',
        },
      ],
    },
    day5: {
      title: 'Pull-up Mastery Test',
      subtitle: 'Zeige deine maximale Zugkraft',
      warmup: [
        {
          name: 'Pull-up Competition Prep',
          duration: 120,
          description:
            'Optimale Vorbereitung für maximale Pull-up Performance.',
        },
      ],
      main: [
        {
          name: 'Max Pull-ups Test',
          reps: 'Max Reps',
          rest: 300,
          description:
            'Maximale Anzahl Standard Pull-ups in einem Satz.',
        },
        {
          name: 'Weighted Pull-up Max',
          reps: 'Max Weight × 1 Rep',
          rest: 240,
          description:
            'Schwerster Pull-up den du schaffst (zusätzliches Gewicht).',
        },
        {
          name: 'One-Arm Pull-up Progression',
          reps: 'Best Attempt',
          rest: 180,
          description:
            'Bester Versuch des einarmigen Pull-ups (jeder Fortschritt zählt).',
        },
        {
          name: 'Pull-up Endurance Ladder',
          reps: 'Ladder bis failure',
          rest: 60,
          description:
            '1-2-3-4-5... Pull-ups bis du nicht mehr kannst.',
        },
        {
          name: 'Front Lever Max Hold',
          reps: 'Max Hold Time',
          rest: 120,
          description:
            'Längste Front Lever Haltezeit in deiner besten Progression.',
        },
      ],
      cooldown: [
        {
          name: 'Pull-up Master Recovery',
          duration: 300,
          description:
            'Entspannung für den Zugkraft-Meister.',
        },
      ],
    },
    day6: {
      title: 'Grand Finale Flow',
      subtitle: 'Zeige deine komplette Transformation',
      warmup: [
        {
          name: 'Championship Warm-up',
          duration: 150,
          description:
            'Perfekte Vorbereitung für deine finale Performance.',
        },
      ],
      main: [
        {
          name: 'Skills Mastery Showcase',
          reps: '15 Min. Performance',
          rest: 0,
          description:
            'Kreiere deine eigene 15-minütige Show mit allen Skills die du gelernt hast.',
        },
        {
          name: 'Personal Record Attempts',
          reps: '3 Versuche je Skill',
          rest: 180,
          description:
            'Versuche in 3 deiner besten Skills neue persönliche Rekorde aufzustellen.',
        },
        {
          name: 'The Ultimate Flow',
          reps: '1 Perfect Run',
          rest: 0,
          description:
            'Eine perfekte Kombination aller deiner besten Moves in fließender Bewegung.',
        },
        {
          name: 'Celebration Challenge',
          reps: 'Your Choice',
          rest: 0,
          description:
            'Wähle selbst eine finale Übung die deine 4-Wochen-Transformation repräsentiert.',
        },
      ],
      cooldown: [
        {
          name: 'Victory Meditation',
          duration: 600,
          description:
            'Reflektiere über deine unglaubliche 4-Wochen-Reise. Du bist jetzt ein Calisthenics-Athlet!',
        },
      ],
    },
    day7: {
      title: "Champion's Rest",
      subtitle: 'Du hast es geschafft - genieße deinen Erfolg!',
      isRestDay: true,
      warmup: [],
      main: [
        {
          name: 'Victory Lap',
          duration: 1800,
          description:
            'Entspannter Spaziergang oder leichtes Joggen. Feiere deine Transformation!',
        },
        {
          name: 'Progress Documentation',
          duration: 900,
          description:
            'Dokumentiere deinen Fortschritt: Fotos, Messungen, persönliche Rekorde. Du bist jetzt ein anderer Mensch!',
        },
        {
          name: 'Future Planning',
          duration: 600,
          description:
            'Plane deine nächsten Fitness-Ziele. Mit dieser Basis kannst du alles erreichen!',
        },
      ],
      cooldown: [
        {
          name: "Champion's Relaxation",
          duration: 1200,
          description:
            'Tiefe Entspannung und Dankbarkeit für das was du erreicht hast. Du bist ein wahrer Champion!',
        },
      ],
    },
  },
}

export default workoutProgram
