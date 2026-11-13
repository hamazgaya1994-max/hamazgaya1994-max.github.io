// Contenu du site
const DATA = {
  name: "Gaya Hamaz",
  title: "Commercial B2B · Développeur Web, Apps & SaaS",
  email: "hamazgaya1994@gmail.com",
  phone: "+33 7 58 08 01 54",
  city: "Saint-Denis (93200), Île-de-France",
  photo: "photo.jpg?v=5",

  home: {
    roles: ["commercial terrain B2B", "chef de secteur", "développeur web", "créateur d'apps & SaaS"],
    intro:
      "7 ans de terrain dans la vente et la grande distribution, et en parallèle je conçois des sites web, des applications mobiles et des logiciels SaaS.",
    stats: [
      { prefix: "", value: 7, suffix: "+", label: "ans sur le terrain" },
      { prefix: "+", value: 27, suffix: " %", label: "de CA en 2024" },
      { prefix: "Bac+", value: 5, suffix: "", label: "ingénieur d'affaires" },
      { prefix: "", value: 4, suffix: "", label: "langues parlées" },
    ],
  },

  summary:
    "J'ai appris le commerce sur le terrain, en alternance comme chef de rayon frais pendant mon master. J'ai ensuite lancé ma propre activité de distribution, avant de devenir chef de secteur chez deux grands noms des boissons en Algérie. Installé en France, j'ai complété ce parcours par un Mastère Ingénieur d'affaires à l'ESIC, en alternance comme commercial itinérant. En parallèle, je développe des sites web, des applications mobiles et des logiciels SaaS. Polyvalent, j'aime le contact client, le travail d'équipe et les résultats concrets. Je suis ouvert à des postes de commercial, chef de secteur, responsable de rayon, chargé de clientèle, ou sur des projets web et SaaS.",

  experiences: [
    {
      role: "Commercial itinérant (alternance)",
      company: "Société européenne de boyaux",
      dates: "Juil. 2025 – Sept. 2026 · Val-d'Oise",
      points: [
        "Suivi au quotidien des encaissements et des paiements clients, pour que la trésorerie reste saine.",
        "Relance des clients en retard de paiement et mise en place d'une procédure de recouvrement claire.",
        "Suivi des commandes et de la facturation, avec un point régulier auprès de la direction commerciale.",
      ],
    },
    {
      role: "Chef de secteur",
      company: "SARL Ibrahim & Fils – IFRI",
      dates: "Déc. 2023 – Fév. 2025 · Algérie",
      points: [
        "Responsable des objectifs de vente du secteur : +27 % de chiffre d'affaires en 2024 par rapport à 2023.",
        "Réorganisation des tournées pour ne laisser aucun client de côté et gagner du temps sur la route.",
        "Passage à deux visites par semaine chez chaque client pour être plus présent en magasin.",
        "Mise en place du merchandising en magasin : PLV, têtes de gondole, animations.",
        "Négociation d'accords d'exclusivité avec des parcs d'attractions et des centres de loisirs.",
      ],
    },
    {
      role: "Chef de secteur",
      company: "SPA Hamoud Boualem",
      dates: "Oct. 2022 – Nov. 2023 · Algérie",
      points: [
        "Suivi des objectifs de vente chiffre par chiffre, et ajustement rapide dès qu'un écart apparaissait.",
        "Lancement des opérations commerciales en magasin (animations, promotions, placement produit) pour booster les ventes.",
        "Vérification de la distribution et de la mise en rayon, pour des produits toujours visibles et disponibles.",
      ],
    },
    {
      role: "Distributeur exclusif (auto-entrepreneur)",
      company: "Douidi Food & Ammar",
      dates: "Fév. 2019 – Sept. 2022 · Algérie",
      points: [
        "Choix des produits à mettre en avant et fixation des prix pour optimiser les marges.",
        "Étude du marché et des habitudes des consommateurs pour anticiper la demande et se démarquer des concurrents.",
        "Gestion de l'activité de A à Z : organisation, planning et suivi des résultats.",
        "Suivi des ventes aux magasins et des ventes aux clients finaux (sell-in / sell-out) pour les améliorer.",
      ],
    },
    {
      role: "Chef de rayon frais (alternance)",
      company: "Dylia Market",
      dates: "Sept. 2016 – Sept. 2018 · Algérie",
      points: [
        "Encadrement de l'équipe du rayon et accompagnement des nouveaux arrivants.",
        "Commandes fournisseurs, réception et contrôle des livraisons (quantités, qualité, températures).",
        "Gestion des stocks, rotation des produits, suivi des dates et inventaires, pour limiter les pertes.",
        "Implantation et mise en valeur des produits, mise en place des promotions et animations.",
        "Suivi du chiffre d'affaires et des marges du rayon.",
        "Relevés de températures et entretien du rayon, dans le respect des règles d'hygiène.",
      ],
    },
  ],

  education: [
    { degree: "MSc 2 Ingénieur d'affaires", school: "ESIC", dates: "Sept. 2025 – Sept. 2026 · Paris" },
    { degree: "MSc 1 Management des organisations", school: "ESAM Paris (groupe IGENSIA Education)", dates: "Mars 2025 – Sept. 2025 · Paris" },
    { degree: "Master en sciences commerciales, spécialité management marketing", school: "Université Mouloud Mammeri, Tizi-Ouzou", dates: "Sept. 2016 – Nov. 2018 · Algérie" },
    { degree: "Licence en sciences commerciales, spécialité marketing", school: "UMMTO", dates: "Sept. 2013 – Juin 2016 · Algérie" },
  ],

  skills: [
    "Prospection et développement commercial",
    "Négociation",
    "Merchandising et trade marketing",
    "Gestion de rayon, stocks et démarque",
    "Management et formation d'équipe",
    "Écoute et relation client",
    "Suivi administratif : commandes, facturation, relances",
    "Autonomie et sens de l'initiative",
    "Rigueur et organisation",
    "Développement web, applications mobiles et SaaS",
  ],
  tools: ["Pack Office", "ERP (Odoo)", "Power BI", "Qlik Sense"],
  licence: "B, C1, C2 et E",
  languages: ["Kabyle : C2 (langue maternelle)", "Français : C1", "Arabe : C1", "Anglais : B1"],

  linkedin: {
    url: "https://www.linkedin.com/in/gaya-hamaz-94839515b/",
    headline: "Commercial B2B · Développeur Web, Apps & SaaS",
    location: "Saint-Denis, Île-de-France",
    posts: [
    ],
  },
};
