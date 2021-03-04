module.exports = {
    lang: "et",
    title: "Tere, Vuepress!",
    description: "See on mu esimene Vuepressi leht! Tegelt teine",
    dest: "github-pages",
  
    themeConfig: {
      logo: "https://vuejs.org/images/logo.png",
      navbar: [
        // esileht
        {
          text: "Kodu",
          link: "/",
        },
        // teine leht teises folderis
        {
          text: "DOCS",
          link: "/vpdocs/",
        },
        // kolmas leht kolmandas folderis jne
        {
          text: "Prototüüpimine",
          link: "/prototyypimine/",
        },
        {
          text: "CVI",
          link: "/cvi/",
        },
      ],
      sidebar: "auto",
    },
  };