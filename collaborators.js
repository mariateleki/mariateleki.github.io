// Add collaborators here: "Full Name As It Appears In Author Lists": "https://their-website.com"
const COLLABORATORS = {
  // External collaborators
  "Anna Seo Gyeong Choi":          "https://annaseogyeongchoi.github.io/",
  "Allison Koenecke":               "https://koenecke.infosci.cornell.edu/",
  "Miguel del Rio":                 "https://www.linkedin.com/in/miguel-del-rio",
  "Corey Miller":                   "https://scholar.google.com/citations?user=F9SGRNIAAAAJ&hl=en",
  "James Caverlee":                 "https://people.engr.tamu.edu/caverlee/index.html",
  "Éva Székely":                    "https://www.kth.se/profile/szekely?l=en",
  "Haoran Liu":                     "https://gloria-liu.github.io/",
  "Xiangjue Dong":                  "https://dongxiangjue.github.io/",
  "Ziwei Zhu":                      "https://zziwei.github.io/",
  "Shree Harsha Bokkahalli Satish": "https://www.kth.se/profile/shbs",
  "Peter Carragher":                "https://petercarragher.com/",
  "Frank Shipman":                  "https://people.engr.tamu.edu/shipman/index.html",
  "Ondřej Klejch":                  "https://www.ondrejklejch.cz/",
  "Ondrej Klejch":                  "https://www.ondrejklejch.cz/",
  "Peter Bell":                     "https://homepages.inf.ed.ac.uk/pbell1/",
  "Vedangi Bengali":                "https://sites.google.com/view/vedangibengali/home",
  "Tian Liu":                       "https://tian1327.github.io/",
  "Yin Zhang":                      "https://www.linkedin.com/in/yin-zhang-753bb4174",
  "Gustav Eje Henter":              "https://people.kth.se/~ghe/",
  "Christoph Minixhofer":           "https://www.linkedin.com/in/christoph-minixhofer/",
  "Millennium Bismay":              "https://www.linkedin.com/in/millennium-bismay",
  "Ruihong Huang":                  "https://people.engr.tamu.edu/huangrh/index.html",
  "Junyan Zhang":                   "https://www.linkedin.com/in/julie-junyan-zhang-38107688/",
  "Anne Duray":                     "https://www.linkedin.com/in/anne-duray-phd-04648a362",
  "Dilma Da Silva":                 "https://www.linkedin.com/in/dilma-da-silva-19a0964",
  "Mohsen Dorodchi":                "https://webpages.charlotte.edu/mdorodch/",
  "Oluwadayo Bamgbelu":             "https://www.linkedin.com/in/oluwadayo-bamgbelu/",
  "Chengkai Liu":                   "https://chengkai-liu.github.io/",
  "Ting Liu":                       "https://scholar.google.com/citations?hl=en&user=iKEBiUgAAAAJ&view_op=list_works&sortby=pubdate",
  "Tracy Hammond":                  "https://engineering.tamu.edu/cse/profiles/tahammond.html",
  "Amanda Lacy":                    "https://www.linkedin.com/in/amanda-lacy-3100a020/",
  "Lingfeng Shi":                   "https://www.linkedin.com/in/lingfeng-shi-b41237335/",
  "Allen Lin":                      "https://allenlin-tamu.github.io/personal-page/",
  "Zhuoer Wang":                    "https://edillower.github.io/",
  "Majid Alfifi":                   "https://people.tamu.edu/~alfifima/",
  "Karthic Madanagopal":            "https://scholar.google.com/citations?hl=en&user=3tz3LCkAAAAJ&view_op=list_works&sortby=pubdate",
  "Shaomei Wu":                     "https://www.shaomei.info/",
  "Kimi Wenzel":                    "https://kimiwenzel.com/",
  "Kimi V. Wenzel":                 "https://kimiwenzel.com/",
  "Anna Irmetova":                  "https://www.linkedin.com/in/annairmetova",
  "Julie Zhang":                    "https://www.linkedin.com/in/julie-junyan-zhang-38107688/",
  "Junyan Zhang":                   "https://www.linkedin.com/in/julie-junyan-zhang-38107688/",

  // Mentees (MS)
  "Rohan Chaudhury":                "https://www.linkedin.com/in/chaudhury-rohan/",
  "Sai Janjur":                     "https://www.linkedin.com/in/saitejas-janjur/",
  "Sai Tejas Janjur":               "https://www.linkedin.com/in/saitejas-janjur/",

  // Mentees (Undergrad)
  "Jobin Varughese":                "https://jobin-varughese.github.io/",
  "Soohwan Kim":                    "https://www.linkedin.com/in/soohwan-kim-8724801bb/",
  "Oliver Grabner":                 "https://olivergrabner.github.io/",
  "Thomas Docog":                   "https://www.linkedin.com/in/thomas-docog-789236280/",
  "Ketan Verma":                    "https://www.linkedin.com/in/ketan-verma12/",
  "Stephanie Birkelbach":           "https://birkelbachs.github.io/",
  "Jason Kim":                      "https://www.linkedin.com/in/jason-kim-b8a82832b",
};

document.addEventListener("DOMContentLoaded", function () {
  const names = Object.keys(COLLABORATORS).sort((a, b) => b.length - a.length);
  if (names.length === 0) return;

  const escaped = names.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");

  document.querySelectorAll('.pub-list b[style*="font-size: medium"]').forEach(function (el) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach(function (textNode) {
      const text = textNode.nodeValue;
      if (!regex.test(text)) { regex.lastIndex = 0; return; }
      regex.lastIndex = 0;

      const frag = document.createDocumentFragment();
      let last = 0, match;

      while ((match = regex.exec(text)) !== null) {
        if (match.index > last) frag.appendChild(document.createTextNode(text.slice(last, match.index)));
        const a = document.createElement("a");
        a.href = COLLABORATORS[match[0]];
        a.textContent = match[0];
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.style.color = "inherit";
        frag.appendChild(a);
        last = match.index + match[0].length;
      }

      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  });
});
