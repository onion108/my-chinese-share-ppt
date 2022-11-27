
/**
 * Create a sīhuò element.
 * @param {string} content The content of the sīhuò.
 * @returns {HTMLDivElement} The sīhuò element.
 */
function createSīhuò(content) {
  let sīhuòRoot = document.createElement('div');
  let sīhuòContent = document.createElement('a');
  sīhuòContent.id = 'sihuo_content';
  sīhuòRoot.style.position = "absolute";
  sīhuòContent.innerText = content;
  sīhuòContent.style.whiteSpace = 'nowrap';
  sīhuòContent.style.fontSize = `${window.innerHeight / 10}px`;
  sīhuòContent.style.left = `${window.innerWidth / 2 - sīhuòContent.offsetWidth / 2}px`;
  sīhuòContent.style.top = `${window.innerHeight / 2 - sīhuòContent.offsetHeight / 2}px`;
  sīhuòRoot.style.top = "0px";
  sīhuòRoot.style.left = "0px";
  sīhuòRoot.style.backgroundColor = "white";
  sīhuòRoot.style.zIndex = '114514';
  sīhuòRoot.style.width = `${window.innerWidth}px`;
  sīhuòRoot.style.height = `${window.innerHeight}px`;
  sīhuòRoot.appendChild(sīhuòContent);
  return sīhuòRoot;
}

/**
 * Fire a sīhuò banner.
 * @param {string} content The content of the sīhuò
 */
function fireSīhuò(content, speed = 20) {
  let standardFontSizeInPx = window.innerHeight / 15;

  let el = document.createElement('div');
  let co = document.createElement('a');
  document.body.append(el);
  el.appendChild(co);
  co.innerText = content;
  el.style.zIndex = "114514";
  co.style.fontSize = `${standardFontSizeInPx}px`;
  co.style.color = 'white';
  co.style.top = '10px';
  co.style.left = '10px';
  co.style.whiteSpace = 'nowrap';
  co.style.fontWeight = 'bolder';
  el.style.backgroundColor = 'black';
  el.style.top = '10px'; // TODO: Test
  el.style.left = '10px'; // TODO: Test
  el.style.width = `${co.offsetWidth + 20}px`;
  el.style.height = `${co.offsetHeight + 20}px`;
  
  let counter = -el.offsetWidth-20;
  let hnd = setInterval(() => {
    counter += speed;
    el.style.left = `${counter}px`;
    if (counter >= window.innerWidth + 20) {
      document.body.removeChild(el);
      clearInterval(hnd);
    }
  }, 1);
}

/**
 * Relayout a sīhuò element.
 * @param {HTMLDivElement} el The sīhuò element.
 */
function relayoutSīhuò(el) {
  let sīhuòRoot = el;
  let sīhuòContent = el.querySelector("#sihuo_content");
  if (sīhuòContent === null) {
    return;
  }
  sīhuòContent.style.whiteSpace = 'nowrap';
  sīhuòContent.style.fontSize = `${window.innerHeight / 10}px`;
  sīhuòContent.style.left = `${window.innerWidth / 2 - sīhuòContent.offsetWidth / 2}px`;
  sīhuòContent.style.top = `${window.innerHeight / 2 - sīhuòContent.offsetHeight / 2}px`;
  sīhuòRoot.style.top = "0px";
  sīhuòRoot.style.left = "0px";
  sīhuòRoot.style.backgroundColor = "white";
  sīhuòRoot.style.zIndex = '114514';
  sīhuòRoot.style.width = `${window.innerWidth}px`;
  sīhuòRoot.style.height = `${window.innerHeight}px`;
}

/**
 * Get the query variable in the URL.
 * @param {string} variable The name of the variable.
 * @returns {string}
 */
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return null;
}

class Slide0 extends Slide {
  initStage() {
    this.titleElement = document.createElement('a');
    this.titleElement.innerText = "破阵子·为陈同甫赋壮词以寄之";

    this.imgIcon = document.createElement('img');
    this.imgIcon.src = 'resources/js.png';
    this.imgIcon.width = 64;
    this.imgIcon.height = 64;
    this.imgIcon.style.borderRadius = '7px';

    this.imgDescription = document.createElement('a');
    this.imgDescription.innerText = 'Réalisé par 27Onion Nèbèlle avec Vanilla Javascript';
    this.imgDescription.style.fontSize = "32px";

    this.serious = document.createElement('a');
    this.serious.style.whiteSpace = 'nowrap';
    this.serious.innerText = "显然此时语文老师还没有意识到事情的严重性"

    this.imgDescriptionTexts = [
      'Réalisé par 27Onion Nèbèlle avec Vanilla Javascript',
      'Made by 27Onion Nebell using Vanilla Javascript',
      'Erstellt von 27Onion Nebell mit Vanilla Javascript',
      'Farita de 27Onion Nebell uzante Vanilla Javascript',
      '由27Onion Nebell采用Javascript制作',
      'Vanilla Javascriptを使用して27Onion Nebellによって作成されました',
      'Vanilla Javascript를 사용하여 27Onion Nebell이 제작했습니다',
    ];

    this.updateHnd = null;

    this.currentDescription = 0;

    this.el.appendChild(this.titleElement);
    this.el.appendChild(this.imgIcon);
    this.el.appendChild(this.imgDescription);
    this.el.appendChild(this.serious);
    return super.render();
  }
  layout() {
    // this.titleElement.style.width = `${window.innerWidth - 20}px`;
    this.titleElement.style.whiteSpace = 'nowrap';
    this.titleElement.style.fontSize = `${window.innerHeight / 10 * 0.92}px`;
    console.log(this.titleElement.offsetHeight, this.titleElement.offsetWidth);
    this.titleElement.style.left = `${window.innerWidth / 2 - this.titleElement.offsetWidth / 2}px`;
    this.titleElement.style.top = `${window.innerHeight / 2 - this.titleElement.offsetHeight / 2}px`;
    
    this.imgIcon.style.top = "7px";
    this.imgIcon.style.left = "7px";
    this.imgDescription.style.left = `${64+20}px`;
    this.imgDescription.style.top = "20px";
    this.imgDescription.style.whiteSpace = 'nowrap';

    this.serious.style.top = `${this.titleElement.offsetHeight + this.titleElement.offsetTop + 5}px`;
    this.serious.style.left = `${window.innerWidth / 2 - this.serious.offsetWidth / 2}px`;
    this.serious.style.fontSize = `${window.innerHeight / 30}px`;
    this.serious.style.color = "lightGrey";
  }
  playEnterAnim(animationEndCallback) {
    this.updateHnd =  setInterval(() => {
      this.currentDescription = (this.currentDescription + 1) % this.imgDescriptionTexts.length;
      let t = this.imgDescriptionTexts[this.currentDescription];
      this.imgDescription.innerText = t;
    }, 1000);

    let originalTop = this.titleElement.offsetTop;
    let delta = -3.0;
    let hnd = setInterval(() => {
      if (delta >= 0) {
        this.layout();
        animationEndCallback();
        clearInterval(hnd);
      }
      this.titleElement.style.top = `${originalTop + delta}px`;
      this.titleElement.style.opacity = `${1+delta/3.0}`
      delta += 0.2;
    }, 16);
  }
  playExitAnim(animationEndCallback) {
    let delta = 0.0;
    let counter = 0;
    /**
     * @type {HTMLElement | null}
     */
    let sīhuò = null;
    let hnd = setInterval(() => {
      if (delta >= 3.0) {
        animationEndCallback();
        clearInterval(hnd);
      }
      this.el.style.transform = `translate(0px, ${delta}px)`
      this.el.style.opacity = `${1.0-delta / 3.0}`;
      if (!sīhuò) {
        delta += 0.2;
      }
      counter++;
      if (counter === 6) {
        sīhuò = createSīhuò("预祝我姐郭瑾瑶生日快乐！！");
        document.body.appendChild(sīhuò);
        relayoutSīhuò(sīhuò);
        console.log("Sīhuò displayed. ");
        return;
      }
      if (sīhuò !== null && counter >= 10) {
        document.body.removeChild(sīhuò);
        sīhuò = null;
      }
    }, 16);
  }
}

class Slide1 extends Slide {
  initStage() {
    this.titleElement = document.createElement("a");
    this.titleElement.innerText = "Le Contexte 背景";
    this.titleElement.style.whiteSpace = 'nowrap';
    this.titleElement.style.fontWeight = 'bold';
    
    this.contentElement = document.createElement('a');
    this.contentElement.innerText = `这首《破阵子·为陈同甫赋壮词以寄之》是辛弃疾赠给他的好友陈亮的，二人均为南宋著名词人，又都坚决主张抗金，收复中原，又同遭投降派的打击迫害被罢官。他们的友谊，是建立在抗金，反对投降基础上得战斗友谊。他们促膝畅谈，共商抗金北伐大计，等待杀敌机会的到来。分手后又相互赠诗，言志抒怀。`;
    this.contentElement.style.textIndent = `50px`;

    this.contentFrom = document.createElement('a');
    this.contentFrom.innerText = '—— de Baidu Baike (Baidupédia...? peut-être)';

    this.el.appendChild(this.titleElement);
    this.el.appendChild(this.contentElement);
    this.el.appendChild(this.contentFrom);
    this.el.opacity = "0";
    return super.render();
  }
  layout() {

    let standardFontSizeInPx = window.innerHeight / 15;

    // Layout for the title element.
    this.titleElement.style.left = '37px';
    this.titleElement.style.top = '37px';
    this.titleElement.style.fontSize = `${standardFontSizeInPx}px`;

    // Layout for the content element.
    this.contentElement.style.left = '37px';
    this.contentElement.style.top = `${this.titleElement.offsetHeight + this.titleElement.offsetTop + 30}px`;
    this.contentElement.style.width = `${window.innerWidth - 37*2}px`;
    this.contentElement.style.fontSize = `${standardFontSizeInPx / 1.3}px`;
    this.contentElement.style.textIndent = `${standardFontSizeInPx * 2}px`;

    // Layout for the content's origin element
    this.contentFrom.style.left = '37px';
    this.contentFrom.style.top = `${this.contentElement.offsetTop + this.contentElement.offsetHeight + 30}px`;
    this.contentFrom.style.width = `${window.innerWidth - 37*2}px`;
    this.contentFrom.style.fontSize = `${standardFontSizeInPx / 1.9}px`;
    this.contentFrom.style.textAlign = `right`;
  }
  playEnterAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(
      () => {
        if (delta >= 3.2) {
          clearInterval(hnd);
          animationEndCallback();
          this.layout();
        }
        this.el.style.transform = `translate(${delta-3.2}px,0)`
        this.el.style.opacity = `${delta / 3.2}`;
        delta += 0.2;
      },
      16,
    );
  }
  playExitAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(() => {
      if (delta >= 3.0) {
        animationEndCallback();
        clearInterval(hnd);
      }
      this.el.style.transform = `translate(0px, ${delta}px)`
      this.el.style.opacity = `${1.0-delta / 3.0}`;
      delta += 0.2;
    }, 16);
  }
}

class Slide2 extends Slide {
  initStage() {
    
    this.titleElement = document.createElement("a");
    this.titleElement.innerText = "Mes Pensées 我所能想到的";
    this.titleElement.style.whiteSpace = 'nowrap';
    this.titleElement.style.fontWeight = 'bold';

    this.thoughts = [
      this.#createThoughts(
        "1 - 这首词是在战争期间写的。", 
        "Cela a été écrit pendant une guerre."
      ),
      this.#createThoughts(
        "2 - 「马作的卢飞快」读作[maː²¹ tsuo⁵¹ ti⁵¹ lu²⁵ feɪ⁵⁵ kʰuaɪ⁵¹]。", 
        "«马作的卢飞快» se prononce comme [maː²¹ tsuo⁵¹ ti⁵¹ lu²⁵ feɪ⁵⁵ kʰuaɪ⁵¹]."
      ),
      this.#createThoughts(
        "3 - 也有人说，这里的「的」读[ti³⁵]。", 
        "Certaines personnes ont dit que «的» devrait être prononcé comme [ti³⁵]."
      ),
      this.#createThoughts(
        "4 - 跑丢了 (⨀△⨀)~/",
        "\\~(⨀△⨀) 404",
      ),
    ];

    this.el.opacity = "0";
    this.el.append(this.titleElement);
    for (let thought of this.thoughts) {
      this.el.append(thought.zh);
      this.el.append(thought.fr);
    }
    return super.render();
  }

  /**
   * Create a element of thoughts.
   * @param {string} zhContent The Chinese thought.
   * @param {string} frContent The French thought.
   * @returns {{zh: HTMLAnchorElement, fr: HTMLAnchorElement}} The element created.
   */
  #createThoughts(zhContent, frContent) {
    let zhEl = document.createElement('a');
    let frEl = document.createElement('a');
    zhEl.innerText = zhContent;
    frEl.innerText = frContent;
    zhEl.style.whiteSpace = 'nowrap';
    frEl.style.whiteSpace = 'nowrap';
    return { zh: zhEl, fr: frEl };
  }

  /**
   * @param {HTMLElement} previousEl
   * @param {{zh: HTMLAnchorElement, fr: HTMLAnchorElement}} thoughtObject 
   * @param {number} stdFontsize
   * @param {number} [padToPrev=14]
   */
  #layoutThoughts(previousEl, thoughtObject, stdFontsize, padToPrev = 14) {
    thoughtObject.zh.style.left = '37px';
    thoughtObject.zh.style.top = `${previousEl.offsetHeight + previousEl.offsetTop + padToPrev}px`;
    thoughtObject.zh.style.fontSize = `${stdFontsize / 1.4}px`;

    thoughtObject.fr.style.left = `${37 + stdFontsize * 1.1}px`;
    thoughtObject.fr.style.top = `${thoughtObject.zh.offsetHeight + thoughtObject.zh.offsetTop - 3}px`;
    thoughtObject.fr.style.font = `${stdFontsize / 2.3}px`;
  }

  layout() {

    let standardFontSizeInPx = window.innerHeight / 15;

    // Layout for the title element.
    this.titleElement.style.left = '37px';
    this.titleElement.style.top = '37px';
    this.titleElement.style.fontSize = `${standardFontSizeInPx}px`;

    /**
     * @type {{zh: HTMLAnchorElement, fr: HTMLAnchorElement} | null}
     */
    let lastThought = null;
    for (let thought of this.thoughts) {
      if (lastThought === null) {
        this.#layoutThoughts(
          this.titleElement,
          thought,
          standardFontSizeInPx,
          30,
        );
      } else {
        this.#layoutThoughts(
          lastThought.fr,
          thought,
          standardFontSizeInPx,
          14,
        );
      }
      lastThought = thought;
    }

  }
  playEnterAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(
      () => {
        if (delta >= 3.2) {
          clearInterval(hnd);
          animationEndCallback();
          this.layout();
        }
        this.el.style.transform = `translate(${delta-3.2}px,0)`
        this.el.style.opacity = `${delta / 3.2}`;
        delta += 0.2;
      },
      16,
    );
  }
  playExitAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(() => {
      if (delta >= 3.0) {
        animationEndCallback();
        clearInterval(hnd);
      }
      this.el.style.transform = `translate(0px, ${delta}px)`
      this.el.style.opacity = `${1.0-delta / 3.0}`;
      delta += 0.2;
    }, 16);
  }
}

class Slide3 extends Slide {
  initStage() {
    this.titleElement = document.createElement("a");
    this.titleElement.innerText = "Quelque Chose D'intéressant 一些我认为有趣的东西";
    this.titleElement.style.whiteSpace = 'nowrap';
    this.titleElement.style.fontWeight = 'bold';
    
    this.contentElement = document.createElement('a');
    this.contentElement.innerText = `这首词在声调方面很有特色。《破阵子》上下两片各有两个六字句，都是平仄互对的，即上句为“仄仄平平仄仄”，下句为“平平仄仄平平”，这就构成了和谐的、舒缓的音节。上下片各有两个七字句，却不是平仄互对，而是仄仄平平平仄仄，仄仄平平仄仄平，这就构成了拗怒的、激越的音节。和谐与拗怒，舒缓与激越，形成了矛盾统一。作者很好地运用了这种矛盾统一的声调，恰当地表现了抒情主人公复杂的心理变化和梦想中的战斗准备、战斗进行、战斗胜利等许多场面的转换，收到了绘声绘色、声情并茂的艺术效果。`;
    this.contentElement.style.textIndent = `50px`;

    this.contentFrom = document.createElement('a');
    this.contentFrom.innerText = '—— de Baidu Baike (Baidupédia...? peut-être)';

    this.el.appendChild(this.titleElement);
    this.el.appendChild(this.contentElement);
    this.el.appendChild(this.contentFrom);
    this.el.opacity = "0";
    return super.render();
  }
  layout() {

    let standardFontSizeInPx = window.innerHeight / 15;

    // Layout for the title element.
    this.titleElement.style.left = '37px';
    this.titleElement.style.top = '37px';
    this.titleElement.style.fontSize = `${standardFontSizeInPx * 0.85}px`;

    // Layout for the content element.
    this.contentElement.style.left = '37px';
    this.contentElement.style.top = `${this.titleElement.offsetHeight + this.titleElement.offsetTop + 30}px`;
    this.contentElement.style.width = `${window.innerWidth - 37*2}px`;
    this.contentElement.style.fontSize = `${standardFontSizeInPx / 1.4}px`;
    this.contentElement.style.textIndent = `${standardFontSizeInPx * 2}px`;

    // Layout for the content's origin element
    this.contentFrom.style.left = '37px';
    this.contentFrom.style.top = `${this.contentElement.offsetTop + this.contentElement.offsetHeight + 30}px`;
    this.contentFrom.style.width = `${window.innerWidth - 37*2}px`;
    this.contentFrom.style.fontSize = `${standardFontSizeInPx / 1.9}px`;
    this.contentFrom.style.textAlign = `right`;
  }
  playEnterAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(
      () => {
        if (delta >= 3.2) {
          clearInterval(hnd);
          animationEndCallback();
          this.layout();
        }
        this.el.style.transform = `translate(${delta-3.2}px,0)`
        this.el.style.opacity = `${delta / 3.2}`;
        delta += 0.2;
      },
      16,
    );
  }
  playExitAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(() => {
      if (delta >= 3.0) {
        animationEndCallback();
        clearInterval(hnd);
      }
      this.el.style.transform = `translate(0px, ${delta}px)`
      this.el.style.opacity = `${1.0-delta / 3.0}`;
      delta += 0.2;
    }, 16);
  }
}

class Slide4 extends Slide {
  initStage() {
    
    this.titleElement = document.createElement("a");
    this.titleElement.innerText = "La Prononciation 发音";
    this.titleElement.style.whiteSpace = 'nowrap';
    this.titleElement.style.fontWeight = 'bold';

    this.thoughts = [
      this.#createThoughts("Mã tác đích lô phi khoái, cung như tích lịch huyền kinh", "马作的卢飞快，弓如霹雳弦惊"),
      this.#createThoughts("마작적로비쾌，궁여벽력현경", "马作的卢飞快，弓如霹雳弦惊")
    ];

    this.el.opacity = "0";
    this.el.append(this.titleElement);
    for (let thought of this.thoughts) {
      this.el.append(thought.zh);
      this.el.append(thought.fr);
    }
    return super.render();
  }

  /**
   * Create a element of thoughts.
   * @param {string} zhContent The Chinese thought.
   * @param {string} frContent The French thought.
   * @returns {{zh: HTMLAnchorElement, fr: HTMLAnchorElement}} The element created.
   */
  #createThoughts(zhContent, frContent) {
    let zhEl = document.createElement('a');
    let frEl = document.createElement('a');
    zhEl.innerText = zhContent;
    frEl.innerText = frContent;
    zhEl.style.whiteSpace = 'nowrap';
    frEl.style.whiteSpace = 'nowrap';
    return { zh: zhEl, fr: frEl };
  }

  /**
   * @param {HTMLElement} previousEl
   * @param {{zh: HTMLAnchorElement, fr: HTMLAnchorElement}} thoughtObject 
   * @param {number} stdFontsize
   * @param {number} [padToPrev=14]
   */
  #layoutThoughts(previousEl, thoughtObject, stdFontsize, padToPrev = 14) {
    thoughtObject.zh.style.left = '37px';
    thoughtObject.zh.style.top = `${previousEl.offsetHeight + previousEl.offsetTop + padToPrev}px`;
    thoughtObject.zh.style.fontSize = `${stdFontsize / 1.4}px`;

    thoughtObject.fr.style.left = `${37}px`;
    thoughtObject.fr.style.top = `${thoughtObject.zh.offsetHeight + thoughtObject.zh.offsetTop - 3}px`;
    thoughtObject.fr.style.font = `${stdFontsize / 2.3}px`;
  }

  layout() {

    let standardFontSizeInPx = window.innerHeight / 15;

    // Layout for the title element.
    this.titleElement.style.left = '37px';
    this.titleElement.style.top = '37px';
    this.titleElement.style.fontSize = `${standardFontSizeInPx}px`;

    /**
     * @type {{zh: HTMLAnchorElement, fr: HTMLAnchorElement} | null}
     */
    let lastThought = null;
    for (let thought of this.thoughts) {
      if (lastThought === null) {
        this.#layoutThoughts(
          this.titleElement,
          thought,
          standardFontSizeInPx,
          30,
        );
      } else {
        this.#layoutThoughts(
          lastThought.fr,
          thought,
          standardFontSizeInPx,
          14,
        );
      }
      lastThought = thought;
    }

  }
  playEnterAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(
      () => {
        if (delta >= 3.2) {
          clearInterval(hnd);
          animationEndCallback();
          this.layout();
        }
        this.el.style.transform = `translate(${delta-3.2}px,0)`
        this.el.style.opacity = `${delta / 3.2}`;
        delta += 0.2;
      },
      16,
    );
  }
  playExitAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(() => {
      if (delta >= 3.0) {
        animationEndCallback();
        clearInterval(hnd);
      }
      this.el.style.transform = `translate(0px, ${delta}px)`
      this.el.style.opacity = `${1.0-delta / 3.0}`;
      delta += 0.2;
    }, 16);
  }
}

class SlideFinal extends Slide {
  initStage() {
    
    this.titleElement = document.createElement("a");
    this.titleElement.innerText = "感谢观看";
    this.titleElement.style.whiteSpace = 'nowrap';
    this.titleElement.style.fontWeight = 'bold';

    this.languageElement = document.createElement("a");
    this.languageElement.innerText = "现代汉语 现代汉语";
    this.languageElement.style.whiteSpace = 'nowrap';

    this.languageData = [
      {
        langContent: "感谢观看",
        langName: "现代汉语 现代汉语",
      },
      {
        langContent: "Thanks for watching",
        langName: "现代英语 English",
      },
      {
        langContent: "Ðancword ymbe wacen",
        langName: "古英语 Englisċ",
      },
      {
        langContent: "Thx 4 watchin'",
        langName: "网络英语 English (US on Internet)",
      },
      {
        langContent: "Merci d'avoir regardé",
        langName: "现代标准法语 Français",
      },
      {
        langContent: "Danke fürs zuschauen",
        langName: "标准德语 Deutsch",
      },
      {
        langContent: "見てくれてありがとう",
        langName: "标准现代日语 日本語",
      },
      {
        langContent: "Dankon por spekti",
        langName: "世界语 Esperanto",
      },
      {
        langContent: "Cảm ơn đã xem",
        langName: "现代越南语 Tiếng Việt",
      },
      {
        langContent: "(@^w^@)~/ thx~~",
        langName: "颜文字语 >(` w ` )<",
      },
      {
        langContent: "skrrrrrrrrrrrrrrr",
        langName: "不明发疯语 skrrrrrrrrrr-wryyyyyyyyy",
      },
      {
        langContent: "114514 1919810 哼，哼，哼，呃呃呃呃啊啊啊啊（恼",
        langName: "HOMO语 1145141919810",
      },
      {
        langContent: "您要感谢它的观看",
        langName: "谷歌生草机语 谷歌使草生长，您的语言",
      },
      {
        langContent: "解 如图即为所求。",
        langName: "数学考试语 综上所述即可得L=3",
      },
      {
        langContent: "NYEH HEH HEH!!!!",
        langName: "纸莎草语 I, THE GREAT PAPYRUS!",
      },
      {
        langContent: "曹飞迪，你上来回答一下",
        langName: "经典咏流传语 每节课必备",
      },
      {
        langContent: "悲上我辛锿的小书爆————",
        langName: "人民叫师语 我不会，我不会，我不会！！！",
      },
      {
        langContent: "啊对对对",
        langName: "摆烂语 希望你对你的人生也会是这个态度",
      },
      {
        langContent: "我要机惨余振越！他CSP爆零了",
        langName: "OIer语 你洛谷打卡了么！",
      },
      {
        langContent: "以摸深挠·戴美寄",
        langName: "EMO嘤语 以摸深挠·因格力洗",
      },
      {
        langContent: "你滴，看滴，感谢",
        langName: "奇怪的中日杂交语 这滴，日语的是",
      },
      {
        langContent: "只因你太美",
        langName: "只因语 篮球和背带裤……？",
      },
      {
        langContent: "langContent",
        langName: "undefined语 langName",
      },
      {
        langContent: "我好不容易%s一次",
        langName: "你却让我输的这么彻底语 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈焯",
      },
      {
        langContent: "阿巴阿巴。阿巴阿巴？",
        langName: "阿巴阿巴语 阿巴阿巴",
      },
      {
        langContent: "哈哈嗨！！",
        langName: "试图社牛语 但是你失败了",
      },
      {
        langContent: "呃——————",
        langName: "林李翔语 十分滴经典啊属于是",
      },
      {
        langContent: "看什么看",
        langName: "奇怪的语 我说后面没有内容了你信不信",
      },
      {
        langContent: "如果你看了，就说明你观看了",
        langName: "废话语 一个长得像语言的语言",
      },
      {
        langContent: "ihofuhw07cyyn93789b786f67 tiu3yi71ydb987by978oeruygn08yn3098720 983uf0uy98370982un0f98yn982upfionuyoewb7ywg8y ",
        langName: "脸滚键盘语 lkajhflkjhroiunyoiuqwfinouybweoiuryqwboxiuycwinorqufcinouyniorwufqyenoivuywgnoriueynoqiuxenowifucynoqwuyfxnoiuyrfnoiucqyfnoiuq",
      },
      {
        langContent: "没有人*手势*比我*手势*更懂*手势*感谢观看",
        langName: "特朗普（川建国）语 美国十分地伟大！*手势*请投我一票",
      },
      {
        langContent: "请大家给我一个免费的赞，这对我来说非常重要",
        langName: "Dream语 i love you George~~ (DNF党狂喜)",
      },
      {
        langContent: "感谢观看了属于是",
        langName: "be动词后置语 be动词后置语了属于是",
      },
      {
        langContent: "关注我的bilibili",
        langName: "我的bilibili是27Onion",
      },
      {
        langContent: "瀚海阑干百丈冰，酸脱羟基醇脱氢",
        langName: "古诗乱编语 理科特有的押韵",
      },
    ];

    let dataCounter = 0;
    this.hnd = setInterval(() => {
      this.languageElement.innerText = this.languageData[dataCounter].langName;
      this.titleElement.innerHTML = this.languageData[dataCounter].langContent;
      dataCounter += 1;
      dataCounter = dataCounter % this.languageData.length;
    }, 1000);

    this.el.opacity = "0";
    this.el.append(this.titleElement);
    this.el.append(this.languageElement);
    return super.render();
  }

  layout() {

    let standardFontSizeInPx = window.innerHeight / 15;

    // Layout for the title element.
    this.titleElement.style.left = `32px`;
    this.titleElement.style.top = `${window.innerHeight / 2 - this.titleElement.offsetHeight / 2 - 64}px`;
    this.titleElement.style.fontSize = `${standardFontSizeInPx * 1.3}px`;

    // Layout for the language element.
    this.languageElement.style.fontSize = `${standardFontSizeInPx / 1.5}px`;
    this.languageElement.style.left = `32px`;
    this.languageElement.style.top = `${this.titleElement.offsetTop + this.titleElement.offsetHeight + 0}px`;


  }
  playEnterAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(
      () => {
        if (delta >= 3.2) {
          clearInterval(hnd);
          animationEndCallback();
          this.layout();
        }
        this.el.style.transform = `translate(${delta-3.2}px,0)`
        this.el.style.opacity = `${delta / 3.2}`;
        delta += 0.2;
      },
      16,
    );
  }
  playExitAnim(animationEndCallback) {
    let delta = 0.0;
    let hnd = setInterval(() => {
      if (delta >= 3.0) {
        animationEndCallback();
        clearInterval(this.hnd);
        clearInterval(hnd);
      }
      this.el.style.transform = `translate(0px, ${delta}px)`
      this.el.style.opacity = `${1.0-delta / 3.0}`;
      delta += 0.2;
    }, 16);
  }
}

class Timer {
  /**
   * @type {HTMLDivElement}
   */
  #el;

  /**
   * @type {HTMLAnchorElement}
   */
  #content;

  /**
   * @type {number}
   */
  #timeCounter;

  /**
   * @type {boolean}
   */
  #started;

  /**
   * @type {number}
   */
  #timerHnd;

  constructor() {
    this.#el = document.createElement('div');
    this.#content = document.createElement('a');
    this.#content.innerText = "--:--";
    this.#content.style.whiteSpace = "nowrap";
    this.#el.appendChild(this.#content);
    this.#timeCounter = 0;
    this.#started = false;
    this.#el.style.backgroundColor = "black";
    this.#el.style.opacity = '.5';
    this.#content.style.color = 'white';
    this.#el.style.zIndex = `1919810`;
    this.#layout();
  }
  #layout() {
    this.#el.style.height = `${this.#content.offsetHeight+20}px`;
    this.#el.style.width = `${this.#content.offsetWidth+20}px`;
    this.#content.style.top = `10px`;
    this.#content.style.left = `10px`;
    this.#el.style.top = `${window.innerHeight - 10 - this.#el.offsetHeight}px`;
    this.#el.style.left = `${window.innerWidth - 10 - this.#el.offsetWidth}px`;

  }
  render() {
    return this.#el;
  }
  start() {
    if (!this.#started) {
      this.#started = true;
      this.#timeCounter = 0;
      this.#timerHnd = setInterval(() => {
        this.#content.innerText = `${Math.floor(this.#timeCounter / 60)}:${this.#timeCounter % 60}`;
        this.#layout();
        this.#timeCounter++;
      }, 1000);
    }
  }
  stop() {
    if (this.#started) {
      this.#started = false;
      clearInterval(this.#timerHnd);
    }
  }
  show() {
    this.#el.style.display = "block";
    this.#layout();
  }
  hide() {
    this.#el.style.display = "none";
  }
  relayout() {
    this.#layout();
  }
}

window.onload = () => {

  let slideShow = new SlideShow("#container");
  slideShow.addSlideShows(
    new Slide0(),
    new Slide1(),
    new Slide2(),
    new Slide3(),
    new Slide4(),
    new SlideFinal(),
  );
  if (getQueryVariable("slide") === null) {
    slideShow.play();
  } else {
    try {
      let no = Number.parseInt(getQueryVariable("slide"));
      if (no >= 0 && no < slideShow.slideShows.length) {
        slideShow.play(no);
      } else {
        slideShow.play();
        console.error("Invalid slide no: " + no);
      }
    } catch (e) {
      console.error(e);
      console.error("Fallback to normal play... ");
      slideShow.play();
    }
  }

  let timer = new Timer();
  document.body.append(timer.render());
  timer.hide();

  window.onresize = () => {
    slideShow.resizeCurrentSlide();
    timer.relayout();
  };


  /**
   * The keydown event handler.
   * @param {KeyboardEvent} e 
   */
  window.onkeydown = (e) => {
    console.log(e.key);
    if (e.key == "ArrowDown" || e.key == " ") {
      slideShow.playNext();
    }
    if (e.key == "s") {
      timer.start();
    }
    if (e.key == "t") {
      timer.show();
    }
    if (e.key == "1") {
      fireSīhuò("我是弹幕，请当我不存在", 5);
    }
    if (e.key == "2") {
      fireSīhuò("余振越CSP爆零了", 8);
    }
    if (e.key == "3") {
      fireSīhuò("只有聪明的人能看到我", 12);
    }
    if (e.key == "4") {
      fireSīhuò("别问我，我也看不懂", 5);
    }
  };

  /**
   * The keyup event handler.
   * @param {KeyboardEvent} e
   */
  window.onkeyup = (e) => {
    if (e.key == "t") {
      timer.hide();
    }
  };

  window.debug = window.debug || {
    slideShow: slideShow,
    timer: timer,
  };
};
