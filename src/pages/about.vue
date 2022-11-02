<script setup>
useHead({
  meta: [
    { 'http-equiv': 'content-language', 'content': 'de' },
  ],
})
</script>

<template>
  <div>
    <div class="text-center" mb-3>
      <div i-carbon-dicom-overlay class="text-4xl mb-1 m-auto" />
      <h3 text-5 font-bold>
        About
      </h3>
    </div>

    <div mx-10 text-4 class="about">
      <p>
        Heroclash wurde ausschließlich mit Technologien erstellt, die wir an der <a href="https://www.johak.at/" target="_blank" underline>JOHAK</a> im IT-Schwerpunkt lehren. Das Spiel läuft im Browser, kann aber als Progressive Web App sowohl am Desktop als auch auf Smartphones installiert werden (getestet mit installiertem Chrome Browser). Das für die Spieler*innen ersichtliche Frontend wurde mit dem Javascript-Framework <a href="https://vuejs.org/" target="_blank" underline>Vue</a> erstellt. Die notwendigen Backend-Funktionen (Datenbank, Authentifizierung und Dateiupload) werden über eine auf eigenen Servern gehostete <a href="https://pocketbase.io/" target="_blank" underline>Pocketbase</a>-Installation zur Verfügung gestellt.
      </p>
      <p>
        Heroclash ist Work In Progress. Geplante Features sind unter anderem:
      </p>

      <ul>
        <li>Online-Multiplayer-Modus</li>
        <li>Erfahrungspunkte und Level</li>
        <li>Dashboard mit Spielstatistiken</li>
        <li>Heroerstellungsmodus</li>
      </ul>
      <p>Schau gelegentlich rein!</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  hyphens: auto;
  max-width: 60ch;
  text-align: justify;
  line-height: 1.6rem;
}

.about>*{
  margin-bottom: 1rem;
}

ul{
  list-style-type: disc;
  margin-left: 1.5rem;
}
</style>
