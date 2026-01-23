export type Language = "es" | "ca" | "en";

export type Translations = {
  nav: {
    product: string;
    tech: string;
    models: string;
    sustainability: string;
    maintenance: string;
    packaging: string;
    contact: string;
    discover: string;
  };
  hero: {
    title: string;
    claim: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    badge: string;
    tagline: string;
  };
  problem: {
    title: string;
    bullets: string[];
  };
  solution: {
    title: string;
    text: string;
    highlight: string;
    items: string[];
    label: string;
  };
  how: {
    title: string;
    steps: { title: string; description: string }[];
  };
  tech: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
    appCopy: string;
    status: { label: string; value: string }[];
    bottomNote: string;
  };
  models: {
    title: string;
    subtitle: string;
    cards: {
      name: string;
      plants: string;
      price: string;
      cta: string;
      image: string;
    }[];
    priceLabel: string;
  };
  sustainability: {
    title: string;
    bullets: string[];
  };
  ecosystem: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  maintenance: {
    title: string;
    subtitle: string;
    cards: {
      replacements: {
        title: string;
        description: string;
        cta: string;
        image: string;
        placeholder: string;
      };
      cleaning: { title: string; description: string; image: string; placeholder: string; cta: string };
      subscription: {
        title: string;
        price: string;
        note: string;
        bullets: string[];
        ctaPrimary: string;
        ctaSecondary: string;
      };
    };
  };
  design: {
    title: string;
    subtitle: string;
    note: string;
    imageAlt: string;
    tags: string[];
  };
  packaging: {
    title: string;
    subtitle: string;
    bullets: string[];
    imageAlt: string;
  };
  roadmap: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    badge: string;
    form: {
      name: string;
      email: string;
      submit: string;
      success: string;
      error: string;
      placeholderName: string;
      placeholderEmail: string;
    };
  };
  footer: {
    brand: string;
    links: { label: string; href: string }[];
    follow: string;
  };
};

import { en } from "./i18n-en";

export const dictionary: Record<Language, Translations> = {
  es: {
    nav: {
      product: "Producto",
      tech: "Tecnología",
      models: "Modelos",
      sustainability: "Sostenibilidad",
      maintenance: "Mantenimiento",
      packaging: "Packaging",
      contact: "Contacto",
      discover: "Descubrir",
    },
    hero: {
      title: "Hort!",
      claim: "Huertos urbanos automáticos para comer mejor, sin preocuparte.",
      subtext:
        "Diseñamos huertos inteligentes que cuidan las plantas por ti. Tú solo disfrutas del resultado.",
      primaryCta: "Descubrir",
      secondaryCta: "Ver modelos",
      badge: "Eco-tech premium · Barcelona",
      tagline: "Tecnología invisible, alimentación cercana.",
    },
    problem: {
      title: "Comer mejor debería ser fácil.",
      bullets: [
        "No hay tiempo para aprender horticultura urbana.",
        "Miedo a que las plantas se mueran por falta de cuidados.",
        "Pisos con poca luz o espacio reducido.",
        "No queremos añadir tareas pesadas a la rutina.",
      ],
    },
    solution: {
      title: "Un huerto que se encarga de todo.",
      label: "Hort! · producto",
      text:
        "Hort! regula el riego, la luz y los nutrientes de forma automática. Tú eliges qué cultivar; el sistema se ocupa del resto.",
      highlight: "Si te olvidas de él, Hort! sigue funcionando.",
      items: [
        "Riego inteligente y silencioso.",
        "Luz regulada según las plantas.",
        "Control y avisos desde la app.",
        "Optimización y eficiencia máxima.",
      ],
    },
    how: {
      title: "Cómo funciona",
      steps: [
        {
          title: "Colocas las plantas",
          description: "Listo en minutos con nuestras cápsulas.",
        },
        {
          title: "Hort gestiona",
          description: "Sensores ajustan agua, luz y nutrientes sin tu ayuda.",
        },
        {
          title: "Notificaciones app",
          description: "Solo te avisa cuando hace falta algo concreto.",
        },
        {
          title: "Cosechas",
          description: "Brotes frescos y hierbas listas para tu cocina.",
        },
      ],
    },
    tech: {
      title: "Tecnología que no se ve, pero se nota.",
      subtitle: "Toda la complejidad ocurre en segundo plano.",
      cards: [
        {
          title: "Sensores",
          description: "Humedad, luz y nutrientes calibrados para cada cultivo.",
        },
        {
          title: "Automatización",
          description:
            "Microcontroladores gestionan riego y luz sin intervención.",
        },
        {
          title: "IA + App",
          description:
            "Algoritmos que aprenden de tus hábitos y te avisan solo cuando importa.",
        },
      ],
      appCopy: "El producto que trabaja por ti.",
      status: [
        { label: "Luz", value: "Auto · 12h" },
        { label: "Riego", value: "Preparado · silencioso" },
        { label: "Nutrientes", value: "Dosificación micro" },
      ],
      bottomNote: "Notificaciones mínimas, solo cuando importa.",
    },
    models: {
      title: "Modelos",
      subtitle: "Dos tamaños, misma experiencia automática.",
      priceLabel: "Precio",
      cards: [
        {
          name: "Hort! 10",
          plants: "10 plantas",
          price: "239,95 €",
          cta: "Descubrir",
          image: "/assets/product-10.jpg",
        },
        {
          name: "Hort! 6",
          plants: "6 plantas",
          price: "139,95 €",
          cta: "Descubrir",
          image: "/assets/product-6.jpg",
        },
      ],
    },
    sustainability: {
      title: "Sostenibilidad honesta",
      bullets: [
        "Ahorro de agua frente al riego tradicional.",
        "Cultivo hidropónico sin tierra y con menos residuos.",
        "Producción local, sin transporte innecesario.",
        "Componentes pensados para durar y repararse.",
      ],
    },
    ecosystem: {
      title: "Ecosistema Hort!",
      subtitle: "Una marca escalable con recambios y nuevas variedades.",
      items: [
        { title: "Recambios", description: "Cápsulas y nutrientes listos para usar." },
        { title: "Kits", description: "Selección estacional para rotar cultivos." },
        {
          title: "Nuevas variedades",
          description: "Experimenta con hojas, brotes y flores comestibles.",
        },
      ],
    },
    design: {
      title: "Diseño pensado para el hogar",
      subtitle: "Producto premium, materiales premium.",
      note: "Preparado para realizar el mantenimiento en cualquier momento.",
      imageAlt: "Materiales cálidos y luz suave en el hogar.",
      tags: ["Luz cálida", "Materiales cuidados", "Listo para cualquier casa"],
    },
    packaging: {
      title: "Packaging diseñado para proteger el producto",
      subtitle:
        "Un packaging cuidado, resistente y pensado para que el primer contacto con Hort! sea especial.",
      bullets: [
        "Materiales premium y reciclables.",
        "Cuidado en la presentación para que llegue perfecto.",
        "Una experiencia amable desde que abres la caja.",
      ],
      imageAlt: "Packaging cuidado para el huerto Hort!",
    },
    roadmap: {
      title: "Objetivos",
      subtitle: "Esto es solo el inicio; seguimos ampliando el ecosistema.",
      items: [
        {
          title: "Módulos ampliables",
          description: "Más capacidad sin ocupar más espacio visual.",
        },
        {
          title: "App inteligente con rutinas automáticas.",
          description:
            "Aprende de tu uso y ajusta iluminación y riego al vuelo.",
        },
        {
          title: "Preparado para interiores en edificios y oficinas.",
          description: "Pensado para espacios compartidos con poca luz.",
        },
        {
          title: "Nuevos kits",
          description: "Variedades temáticas para rotar sabores cada estación.",
        },
      ],
    },
    finalCta: {
      title: "Empieza a comer mejor sin cambiar tu rutina.",
      subtitle:
        "Deja tus datos y te avisamos cuando lancemos las primeras unidades.",
      primaryCta: "Descubrir",
      badge: "Hort! · inversores",
      form: {
        name: "Nombre",
        email: "Email",
        submit: "Solicitar info",
        success: "Gracias, pronto sabrás de nosotros.",
        error: "Completa nombre y email para continuar.",
        placeholderName: "Nombre y apellidos",
        placeholderEmail: "email@example.com",
      },
    },
    maintenance: {
      title: "Repuestos y mantenimiento",
      subtitle: "Todo lo que necesitas para que Hort funcione perfecto, sin complicaciones.",
      cards: {
        replacements: {
          title: "Repuestos",
          description:
            "Piezas originales y consumibles (bombas, filtros, soporte de semillas, etc.) cuando lo necesites.",
          cta: "Ver recambios",
          image: "/assets/recanvis.jpg",
          placeholder: "Imagen de recambios",
        },
        cleaning: {
          title: "Limpieza",
          description:
            "Kit de limpieza pensado para hacerlo rápido y en cualquier momento, sin ensuciar.",
          image: "/assets/neteja.jpg",
          placeholder: "Imagen de limpieza",
          cta: "Ver kit",
        },
        subscription: {
          title: "Suscripción mensual de mantenimiento",
          price: "10€ / mes",
          note: "Envío incluido",
          bullets: [
            "Consumibles y repuestos clave cuando toca",
            "Recordatorios y recomendaciones desde la app",
            "Todo preparado para que lo olvides y funcione solo",
          ],
          ctaPrimary: "Activar suscripción",
          ctaSecondary: "¿Qué incluye?",
        },
      },
    },
    footer: {
      brand: "Hort! · Cultivo sencillo con tecnología invisible.",
      links: [
        { label: "Producto", href: "#producto" },
        { label: "Tecnología", href: "#tecnologia" },
        { label: "Modelos", href: "#modelos" },
        { label: "Sostenibilidad", href: "#sostenibilidad" },
        { label: "Contacto", href: "#contacto" },
      ],
      follow: "Síguenos",
    },
  },
  ca: {
    nav: {
      product: "Producte",
      tech: "Tecnologia",
      models: "Models",
      sustainability: "Sostenibilitat",
      maintenance: "Manteniment",
      packaging: "Packaging",
      contact: "Contacte",
      discover: "Descobrir",
    },
    hero: {
      title: "Hort!",
      claim:
        "Horts urbans automàtics per menjar millor, sense preocupar-te.",
      subtext:
        "Dissenyem horts intel·ligents que cuiden les plantes per tu. Tu només en gaudeixes.",
      primaryCta: "Descobrir",
      secondaryCta: "Veure models",
      badge: "Eco-tech premium · Barcelona",
      tagline: "Tecnologia invisible, alimentació propera.",
    },
    problem: {
      title: "Menjar millor hauria de ser fàcil.",
      bullets: [
        "No hi ha temps per aprendre a cuidar un hort urbà.",
        "Por que les plantes es morin sense cures constants.",
        "Pisos amb poca llum o espai limitat.",
        "No volem afegir tasques pesades a la rutina.",
      ],
    },
    solution: {
      title: "Un hort que s'encarrega de tot.",
      label: "Hort! · producte",
      text:
        "Hort! regula el reg, la llum i els nutrients de forma automàtica. Tu tries què cultivar; el sistema fa la resta.",
      highlight: "Si te n'oblides, Hort! continua funcionant.",
      items: [
        "Reg intel·ligent i silenciós.",
        "Llum regulada segons les plantes.",
        "Control i avisos des de l'app.",
        "Optimització i eficiència màxima.",
      ],
    },
    how: {
      title: "Com funciona",
      steps: [
        {
          title: "Col·loques les plantes",
          description: "Llest en minuts amb les nostres càpsules.",
        },
        {
          title: "Hort gestiona",
          description: "Sensors ajusten aigua, llum i nutrients sense tu.",
        },
        {
          title: "Notificacions app",
          description: "Només t'avisa quan cal alguna cosa concreta.",
        },
        {
          title: "Culls",
          description: "Brots frescos i herbes llestes per a la cuina.",
        },
      ],
    },
    tech: {
      title: "Tecnologia que no es veu, però es nota.",
      subtitle: "Tota la complexitat passa en segon pla.",
      cards: [
        {
          title: "Sensors",
          description:
            "Humitat, llum i nutrients calibrats per a cada cultiu.",
        },
        {
          title: "Automatització",
          description:
            "Microcontroladors gestionen reg i llum sense intervenció.",
        },
        {
          title: "IA + App",
          description:
            "Algoritmes que aprenen dels teus hàbits i només avisen quan importa.",
        },
      ],
      appCopy: "El producte que treballa per tu.",
      status: [
        { label: "Llum", value: "Auto · 12h" },
        { label: "Reg", value: "Preparat · silenciós" },
        { label: "Nutrients", value: "Dosificació micro" },
      ],
      bottomNote: "Notificacions mínimes, només quan cal.",
    },
    models: {
      title: "Models",
      subtitle: "Dos tamanys, la mateixa experiència automàtica.",
      priceLabel: "Preu",
      cards: [
        {
          name: "Hort! 10",
          plants: "10 plantes",
          price: "239,95 €",
          cta: "Descobrir",
          image: "/assets/product-10.jpg",
        },
        {
          name: "Hort! 6",
          plants: "6 plantes",
          price: "139,95 €",
          cta: "Descobrir",
          image: "/assets/product-6.jpg",
        },
      ],
    },
    sustainability: {
      title: "Sostenibilitat honesta",
      bullets: [
        "Estalvi d'aigua davant del reg tradicional.",
        "Cultiu hidropònic sense terra i amb menys residus.",
        "Producció local, sense transport innecessari.",
        "Components pensats per durar i reparar-se.",
      ],
    },
    ecosystem: {
      title: "Ecosistema Hort!",
      subtitle: "Una marca escalable amb recanvis i noves varietats.",
      items: [
        {
          title: "Recanvis",
          description: "Càpsules i nutrients llestos per utilitzar.",
        },
        { title: "Kits", description: "Selecció estacional per rotar cultius." },
        {
          title: "Noves varietats",
          description: "Experimenta amb fulles, brots i flors comestibles.",
        },
      ],
    },
    design: {
      title: "Disseny preparat per casa",
      subtitle: "Producte premium, materials premium.",
      note: "Preparat per fer el manteniment en qualsevol moment.",
      imageAlt: "Materials càlids i llum suau a casa.",
      tags: ["Llum càlida", "Materials cuidats", "Preparat per casa"],
    },
    packaging: {
      title: "Packaging dissenyat per cuidar el producte",
      subtitle:
        "Un packaging cuidat, resistent i pensat perquè el primer contacte amb Hort! sigui especial.",
      bullets: [
        "Materials premium i reciclables.",
        "Cura en la presentació perquè arribi perfecte.",
        "Una experiència amable des que obres la caixa.",
      ],
      imageAlt: "Caixa de packaging de Hort!",
    },
    roadmap: {
      title: "Objectius",
      subtitle: "Això és només l'inici; ampliem l'ecosistema.",
      items: [
        {
          title: "Mòduls ampliables",
          description: "Més capacitat sense ocupar més espai visual.",
        },
        {
          title: "App intel·ligent amb rutines automàtiques.",
          description: "Aprèn de l'ús i ajusta il·luminació i reg al vol.",
        },
        {
          title: "Preparat per interiors en edificis i oficines.",
          description: "Pensat per espais compartits amb poca llum.",
        },
        {
          title: "Nous kits",
          description: "Varietats temàtiques per rotar sabors cada estació.",
        },
      ],
    },
    finalCta: {
      title: "Comença a menjar millor sense canviar la rutina.",
      subtitle:
        "Deixa les teves dades i t'avisarem quan llancem les primeres unitats.",
      primaryCta: "Descobrir",
      badge: "Hort! · inversors",
      form: {
        name: "Nom",
        email: "Email",
        submit: "Sol·licitar info",
        success: "Gràcies, aviat en sabràs més.",
        error: "Completa el nom i l'email per continuar.",
        placeholderName: "Nom i cognoms",
        placeholderEmail: "email@exemple.com",
      },
    },
    maintenance: {
      title: "Recanvis i manteniment",
      subtitle: "Tot el que necessites perquè l’Hort funcioni perfecte, sense complicacions.",
      cards: {
        replacements: {
          title: "Recanvis",
          description:
            "Peces originals i consumibles (bombes, filtres, suport de llavors, etc.) quan ho necessitis.",
          cta: "Veure recanvis",
          image: "/assets/recanvis.jpg",
          placeholder: "Imatge de recanvis",
        },
        cleaning: {
          title: "Neteja",
          description:
            "Kit de neteja pensat per fer-ho ràpid i en qualsevol moment, sense embrutar.",
          image: "/assets/neteja.jpg",
          placeholder: "Imatge de neteja",
          cta: "Veure kit",
        },
        subscription: {
          title: "Subscripció mensual de manteniment",
          price: "10€ / mes",
          note: "Enviament inclòs",
          bullets: [
            "Consumibles i recanvis clau quan toca",
            "Recordatoris i recomanacions des de l’app",
            "Tot preparat perquè ho oblidis i funcioni sol",
          ],
          ctaPrimary: "Activar subscripció",
          ctaSecondary: "Què inclou?",
        },
      },
    },
    footer: {
      brand: "Hort! · Cultiu senzill amb tecnologia invisible.",
      links: [
        { label: "Producte", href: "#producto" },
        { label: "Tecnologia", href: "#tecnologia" },
        { label: "Models", href: "#modelos" },
        { label: "Sostenibilitat", href: "#sostenibilidad" },
        { label: "Contacte", href: "#contacto" },
      ],
      follow: "Segueix-nos",
    },
  },
  en,
};
