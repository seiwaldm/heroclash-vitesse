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
        <li>Online-Modus</li>
        <li>Erfahrungspunkte und Level</li>
        <li>Dashboard mit Spielstatistiken</li>
        <li>Erstellung eigener Heroes</li>
      </ul>
      <p>Schau gelegentlich rein!</p>
    </div>

    <div class="text-center" mb-3>
      <h3 text-5 font-bold>
        Datenschutz
      </h3>
    </div>

    <div mx-10 text-4 class="about">
      <p>
        Diese Website verwendet keine Cookies. Wir tracken unsere Besucher*innen nicht. Wir geben keine Daten über unsere Besucher*innen an Dritte weiter.
      </p>
      <p>Für den (geplanten) Online-Modus und für die (geplante) Erstellung von eigenen Heroes ist es notwendig, ein Konto einzurichten. Dies kann durch die Authentifizierung über eine E-Mail/Passwort-Kombination oder durch externe Authentizitäts-Provider wie z.B. Google erfolgen. In diesem Fall erhält der Authentizitäts-Provider Ihrer Wahl zusätzlichen Einblick in Ihr Surfverhalten.</p>
    </div>
    <div class="text-center" mb-3>
      <h3 text-5 font-bold>
        Nutzungsbedingungen
      </h3>
    </div>

    <div mx-10 text-4 class="about">
      <p>
        Mit der Nutzung dieser Web-Applikation sind keine weiteren Bedingungen verbunden. Der Administrator behält sich vor, jegliche durch Benutzer*innen erstellte, diskriminierende Inhalte zu löschen. Bei strafrechtlich relevanten Verstößen werden diese zur Anzeige gebracht.
      </p>
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
