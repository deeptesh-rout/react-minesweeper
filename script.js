function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
lightenDarkenColor = (col, amt) => {
  let usePound = false;
  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }
  let num = parseInt(col, 16);
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;else
  if (r < 0) r = 0;
  let b = (num >> 8 & 0x00ff) + amt;
  if (b > 255) b = 255;else
  if (b < 0) b = 0;
  let g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;else
  if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
};

const Modal = props => {

  let resultMessage;
  if (props.gameResult === 'won') {
    resultMessage = 'CONGRATULATIONS!';
  } else if (props.gameResult) {
    resultMessage = 'GAME OVER!';
  }

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "modal", className: props.show ? 'show' : '' }, /*#__PURE__*/
    React.createElement("div", { id: "result-box" }, /*#__PURE__*/
    React.createElement("div", { id: "result-top" }, /*#__PURE__*/
    React.createElement("svg", { id: "bomb", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 774.7 676.2" }, /*#__PURE__*/
    React.createElement("path", { d: "M427.4,144.2l40.7-41.8a23.1,23.1,0,0,1,32.5,0l72.8,72.8a23.1,23.1,0,0,1,0,32.5l-37.4,37.4", transform: "translate(0 -11.6)", fill: "#8b6af5", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke bomb-fill" }), /*#__PURE__*/
    React.createElement("circle", { cx: "291.1", cy: "385.2", r: "282.6", fill: "#8b6af5", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke bomb-fill" }), /*#__PURE__*/
    React.createElement("path", { d: "M540.2,141.2l15.4-20.5c12.6-16.8,30.4-17.7,43.6-2.4l0.3,0.3c11.8,13.7,31.3,22.6,48.3,11.4,6.1-4,20.7-20.5,20.7-20.5", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke" }), /*#__PURE__*/
    React.createElement("line", { x1: "701.7", y1: "63.3", x2: "742", y2: "23.1", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke" }), /*#__PURE__*/
    React.createElement("line", { x1: "713.2", y1: "107.4", x2: "766.2", y2: "128.2", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke" }), /*#__PURE__*/
    React.createElement("line", { x1: "654.5", y1: "60.2", x2: "630.8", y2: "8.5", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke" }), /*#__PURE__*/
    React.createElement("path", { d: "M82,396.8c0-118.4,95.9-214.3,214.3-214.3", transform: "translate(0 -11.6)", fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeOpacity: "0.45", strokeWidth: "17" }), /*#__PURE__*/
    React.createElement("g", { id: "happy-face", style: { display: props.gameResult === "won" ? 'block' : 'none' } }, /*#__PURE__*/
    React.createElement("path", { d: "M170.4,432.1a34.6,34.6,0,0,1,69.2,0", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke" }), /*#__PURE__*/
    React.createElement("path", { d: "M342.5,432.1a34.6,34.6,0,0,1,69.2,0", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke" }), /*#__PURE__*/
    React.createElement("path", { d: "M367,481.7c0,33.7-33.4,64.1-74.6,64.1s-74.6-30.3-74.6-64.1", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke" })), /*#__PURE__*/

    React.createElement("g", { id: "sad-face", style: { display: props.gameResult === "lost" ? 'block' : 'none' } }, /*#__PURE__*/
    React.createElement("g", null, /*#__PURE__*/
    React.createElement("circle", { cx: "377.1", cy: "406", r: "17.7", fill: "#39395b", className: "bomb-fill-dark" }), /*#__PURE__*/
    React.createElement("path", { d: "M250,517.1c0-19.2,17.6-42.5,41.1-42.5s43.8,23.3,43.8,42.5", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17", className: "bomb-stroke" }), /*#__PURE__*/
    React.createElement("circle", { cx: "205", cy: "406", r: "17.7", fill: "#39395b", className: "bomb-fill-dark" })))), /*#__PURE__*/



    React.createElement("h1", { id: "result-message" }, resultMessage), /*#__PURE__*/
    React.createElement("h2", { className: `result-time ${props.gameResult === "won" ? "show" : ""}` }, "Your time: ", /*#__PURE__*/React.createElement("span", { className: "time-display" }, props.timeDisplay), " seconds")), /*#__PURE__*/

    React.createElement("div", { id: "new-game", onClick: props.onReplay }, /*#__PURE__*/
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", viewBox: "0 0 512 512", fill: "#fff", width: "30" }, /*#__PURE__*/
    React.createElement("g", null, /*#__PURE__*/
    React.createElement("path", { d: "M480.6,235.6c-11.3,0-20.4,9.1-20.4,20.4c0,112.6-91.6,204.2-204.2,204.2c-112.6,0-204.2-91.6-204.2-204.2   S143.4,51.8,256,51.8c61.5,0,118.5,27.1,157.1,73.7h-70.5c-11.3,0-20.4,9.1-20.4,20.4s9.1,20.4,20.4,20.4h114.6   c11.3,0,20.4-9.1,20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v59C390.7,40.1,325.8,11,256,11   C120.9,11,11,120.9,11,256c0,135.1,109.9,245,245,245s245-109.9,245-245C501,244.7,491.9,235.6,480.6,235.6z" }))), /*#__PURE__*/


    React.createElement("h2", null, "New Game"))))));





};

class Timer extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "startTimer",

    () => {
      let sec = 0;
      this.timerCount = setInterval(() => {
        sec++;
        this.props.onTimeChange(sec);
        if (sec > 998) clearInterval(this.timerCount);
      }, 1000);
    });_defineProperty(this, "stopTimer",

    () => {
      clearInterval(this.timerCount);
    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "timer" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", id: "Capa_1", x: "0px", y: "0px", viewBox: "0 0 559.98 559.98", fill: "#fff", width: "30px" }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", { d: "M279.99,0C125.601,0,0,125.601,0,279.99c0,154.39,125.601,279.99,279.99,279.99c154.39,0,279.99-125.601,279.99-279.99    C559.98,125.601,434.38,0,279.99,0z M279.99,498.78c-120.644,0-218.79-98.146-218.79-218.79    c0-120.638,98.146-218.79,218.79-218.79s218.79,98.152,218.79,218.79C498.78,400.634,400.634,498.78,279.99,498.78z" }), /*#__PURE__*/React.createElement("path", { d: "M304.226,280.326V162.976c0-13.103-10.618-23.721-23.716-23.721c-13.102,0-23.721,10.618-23.721,23.721v124.928    c0,0.373,0.092,0.723,0.11,1.096c-0.312,6.45,1.91,12.999,6.836,17.926l88.343,88.336c9.266,9.266,24.284,9.266,33.543,0    c9.26-9.266,9.266-24.284,0-33.544L304.226,280.326z" }))), /*#__PURE__*/React.createElement("span", { className: "counter" }, ("00" + this.props.timeDisplay).slice(-3))));

  }}


class Dropdown extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      isMenuVisible: false });_defineProperty(this, "handleMenuItemClick",


    e => {
      const selectedLevel = this.props.levels.find(level => level.difficulty === e.target.innerText);
      this.setState({ isMenuVisible: false });
      this.props.onLevelChange(selectedLevel);
    });_defineProperty(this, "toggleMenu",

    () => {
      this.setState({ isMenuVisible: !this.state.isMenuVisible });
    });_defineProperty(this, "closeMenu",

    () => {
      this.setState({ isMenuVisible: false });
    });}

  render() {

    let dropdown;
    if (this.state.isMenuVisible) {
      dropdown = /*#__PURE__*/
      React.createElement("div", { className: "menu" },
      this.props.levels.map(level => {
        return /*#__PURE__*/React.createElement("div", { onClick: e => {this.handleMenuItemClick(e);}, className: "option", key: level.id, value: level.difficulty }, level.difficulty);
      }));


    }
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "dropdown", onBlur: () => {this.closeMenu();} }, /*#__PURE__*/
      React.createElement("div", { className: "title", onClick: () => {this.toggleMenu();} },
      this.props.selectedLevel.difficulty),

      dropdown)));



  }}


class Tile extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      numberColors: ["#8B6AF5", "#74c2f9", "#42dfbc", "#f9dd5b", "#FEAC5E", "#ff5d9e", "#F29FF5", "#c154d8"],
      stagger: 20,
      flagIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 287.987 287.987" fill="#695ca8" style="enable-background:new 0 0 287.987 287.987;" xml:space="preserve"><g><path d="M228.702,141.029c-3.114-3.754-3.114-9.193,0-12.946l33.58-40.474c2.509-3.024,3.044-7.226,1.374-10.783   c-1.671-3.557-5.246-5.828-9.176-5.828h-57.647v60.98c0,16.618-13.52,30.138-30.138,30.138h-47.093v25.86   c0,5.599,4.539,10.138,10.138,10.138h124.74c3.93,0,7.505-2.271,9.176-5.828c1.671-3.557,1.135-7.759-1.374-10.783L228.702,141.029   z"/><path d="M176.832,131.978V25.138c0-5.599-4.539-10.138-10.138-10.138H53.37c0-8.284-6.716-15-15-15s-15,6.716-15,15   c0,7.827,0,253.91,0,257.987c0,8.284,6.716,15,15,15s15-6.716,15-15c0-6.943,0-126.106,0-130.871h113.324   C172.293,142.116,176.832,137.577,176.832,131.978z"/></g></svg>',
      bombIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" fill="#695ca8" ><g><path d="m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"/><path d="m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"/><path d="m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"/><path d="m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"/><path d="m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"/><path d="m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"/></g></svg>' });_defineProperty(this, "onRightClick",


    e => {
      e.preventDefault();
      const tileId = parseInt(e.target.id);
      this.props.onAddFlag(tileId);
    });}

  render() {
    const tile = this.props.tile;

    let tileClass;
    if (tile.checked) {
      if (tile.hasBomb) tileClass = " checked has-bomb";else
      tileClass = " checked";
    } else {
      tileClass = '';
    }

    let content;
    if (tile.checked) {
      if (tile.hasBomb) {
        content = this.state.bombIcon;
      } else {
        if (tile.neighborBombs !== 0) {
          content = tile.neighborBombs;
        } else {
          content = null;
        }
      }
    } else {
      if (tile.flag) {
        content = this.state.flagIcon;
      } else {
        content = null;
      }
    }

    let tileStyle;
    if (tile.checked && tile.hasBomb && tile.bgColor) {
      tileStyle = { backgroundColor: tile.bgColor };
    } else if (tile.checked && !tile.hasBomb && tile.neighborBombs !== 0) {
      const tileNumberColor = this.state.numberColors[tile.neighborBombs - 1];
      const tileNumberShadow = "1px 1px" + lightenDarkenColor(tileNumberColor, -20);
      tileStyle = { color: tileNumberColor, textShadow: tileNumberShadow };
    } else {
      tileStyle = null;
    }


    return /*#__PURE__*/(
      React.createElement("div", { id: this.props.id, className: `tile${tileClass}`, onClick: e => this.props.onTileClick(e), onContextMenu: e => this.onRightClick(e), neighborbombs: tile.neighborbombs, style: tileStyle }, /*#__PURE__*/React.createElement("div", { className: "tile-container", dangerouslySetInnerHTML: { __html: content } })));

  }}



class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "getMainColor",














































    () => {
      const randomColor = this.state.mainColors[Math.floor(Math.random() * this.state.mainColors.length)];
      this.state.root.style.setProperty("--main-color", randomColor);
      this.state.root.style.setProperty(
      "--dark-color",
      lightenDarkenColor(randomColor, -50));

    });_defineProperty(this, "clearBoard",

    () => {
      console.clear();
      if (this.state.isTimerOn) this.refs.timer.stopTimer();
      this.setState({ timeDisplay: 0, isGameOver: false, tiles: [], gameResult: '', isContainerAnimated: false, isTimerOn: false, flagCount: 0 });
      this.createBoard();
    });_defineProperty(this, "createBoard",

    () => {
      this.getMainColor();
      const width = this.state.selectedLevel.width;
      const tileWidth = parseInt(
      getComputedStyle(this.state.root).getPropertyValue("--tile-width"));

      this.state.root.style.setProperty("--grid-width", width * tileWidth);

      const tiles = [];
      for (let i = 0; i < width * width; i++) {
        tiles.push({ id: i, checked: false, hasBomb: false });
      }

      //add bombs
      const randomTiles = tiles.map(tile => tile.id).sort(() => Math.random() - 0.5).slice(0, this.state.selectedLevel.bombs);
      let bombIndex = 0;
      tiles.forEach((tile, index) => {
        if (randomTiles.includes(tile.id)) {
          tile.hasBomb = true;
          tile.bombIndex = bombIndex;
          tile.bgColor = this.state.bgColors[Math.floor(Math.random() * this.state.bgColors.length)];
          bombIndex++;
        }
        console.log(tile);
      });

      //add numbers
      for (let i = 0; i < tiles.length; i++) {
        let total = 0;
        const isLeftEdge = i % width === 0;
        const isRightEdge = i % width === width - 1;

        if (!tiles[i].hasBomb) {
          if (!isLeftEdge) {
            if (tiles[i - 1] && tiles[i - 1].hasBomb)
            total++;
            if (
            tiles[i - 1 + width] &&
            tiles[i - 1 + width].hasBomb)

            total++;
            if (
            tiles[i - 1 - width] &&
            tiles[i - 1 - width].hasBomb)

            total++;
          }

          if (!isRightEdge) {
            if (tiles[i + 1] && tiles[i + 1].hasBomb)
            total++;
            if (
            tiles[i + 1 + width] &&
            tiles[i + 1 + width].hasBomb)

            total++;
            if (
            tiles[i + 1 - width] &&
            tiles[i + 1 - width].hasBomb)

            total++;
          }

          if (tiles[i - width] && tiles[i - width].hasBomb) total++;
          if (tiles[i + width] && tiles[i + width].hasBomb) total++;
          tiles[i].neighborBombs = total;
        }
      }
      this.setState({ tiles, flagsLeft: this.state.selectedLevel.bombs });
    });_defineProperty(this, "handleTileClick",

    e => {
      const clickedTileId = parseInt(e.target.id);
      if (!this.state.isTimerOn) this.refs.timer.startTimer();
      this.setState({ isTimerOn: true });
      this.clickTile(clickedTileId);
    });_defineProperty(this, "clickTile",


    tileId => {
      const currentTile = this.state.tiles.find(tile => tile.id === tileId);
      let checkIndex = 0;

      if (this.state.isGameOver) return null;
      if (currentTile.checked || currentTile.flag) {
        return null;
      }
      if (currentTile.hasBomb) {
        this.gameOver(currentTile);
      } else {
        let total = currentTile.neighborBombs ? currentTile.neighborBombs : 0;

        if (total !== 0) {
          currentTile.checked = true;
          currentTile.color = this.state.mainColors[currentTile.neighborBombs - 1];
          return;
        }
      }
      currentTile.checked = true;
      currentTile.checkIndex = checkIndex;
      checkIndex++;
      console.log(checkIndex);
      this.checktile(tileId);
      const tiles = [...this.state.tiles];
      tiles.forEach(tile => {
        if (tile.id === tileId) tile.checked = true;
      });
      this.setState({ tiles });
    });_defineProperty(this, "checktile",


    tileId => {
      const width = this.state.selectedLevel.width;
      const isLeftEdge = tileId % width === 0;
      const isRightEdge = tileId % width === width - 1;
      const tiles = this.state.tiles;

      const loopThroughtiles = tile => {
        this.clickTile(tile.id);
      };

      if (!isRightEdge) {
        if (tiles[tileId + 1 - width])
        loopThroughtiles(tiles[tileId + 1 - width]);
        if (tiles[tileId + 1]) loopThroughtiles(tiles[tileId + 1]);
        if (tiles[tileId + 1 + width])
        loopThroughtiles(tiles[tileId + 1 + width]);
      }
      if (!isLeftEdge) {
        if (tiles[tileId - 1]) loopThroughtiles(tiles[tileId - 1]);
        if (tiles[tileId - 1 - width])
        loopThroughtiles(tiles[tileId - 1 - width]);
        if (tiles[tileId - 1 + width])
        loopThroughtiles(tiles[tileId - 1 + width]);
      }
      if (tiles[tileId - width]) loopThroughtiles(tiles[tileId - width]);
      if (tiles[tileId + width]) loopThroughtiles(tiles[tileId + width]);
    });_defineProperty(this, "gameOver",

    currentTile => {
      this.setState({ isGameOver: true, isContainerAnimated: true, isTimerOn: false, gameResult: 'lost' });
      this.refs.timer.stopTimer();
      let itemsProcessed = 0;

      // //show all the bombs
      const bombTiles = this.state.tiles.filter((tile) =>
      tile.hasBomb);

      bombTiles.forEach(tile => {
        currentTile.checked = true;
        tile.checked = true;
        itemsProcessed++;
        if (itemsProcessed === bombTiles.length) {
          setTimeout(() => {
            this.openModal();
          }, 1000);
        }
      });
    });_defineProperty(this, "addFlag",


    tileId => {
      const tile = this.state.tiles.find(tile => tile.id === tileId);

      if (this.state.isGameOver) return;
      let { flagCount } = this.state;
      if (!tile.checked) {
        if (!tile.flag && flagCount < this.state.selectedLevel.bombs) {
          tile.flag = true;
          flagCount++;
          const flagsLeft = this.state.selectedLevel.bombs - flagCount;
          this.setState({ flagsLeft, flagCount });
          this.checkForWin();
        } else if (tile.flag) {
          tile.flag = false;
          flagCount--;
          const flagsLeft = this.state.selectedLevel.bombs - flagCount;
          this.setState({ flagsLeft, flagCount });
        }
      }
    });_defineProperty(this, "checkForWin",


    () => {
      let matches = 0;
      this.state.tiles.forEach(tile => {
        if (tile.flag && tile.hasBomb) matches++;
        if (matches === this.state.selectedLevel.bombs) {
          this.setState({ gameResult: 'won', isModalOpen: true, isGameOver: true, isTimerOn: false });
          this.refs.timer.stopTimer();
          if (!tile.checked) tile.checked = true;
        }
      });
    });_defineProperty(this, "replay",

    () => {
      if (this.state.isModalOpen) this.closeModal();
      setTimeout(() => {this.clearBoard();}, 80);
    });_defineProperty(this, "updateLevel",

    level => {
      this.setState({ selectedLevel: level }, () => this.clearBoard());
    });_defineProperty(this, "closeModal",


    () => {
      this.setState({ isModalOpen: false });
    });_defineProperty(this, "openModal",

    () => {
      this.setState({ isModalOpen: true });
    });_defineProperty(this, "getTime",

    time => {
      this.setState({ timeDisplay: time });
    });_defineProperty(this, "addElement",

    (x, y) => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "#bomb-svg");

      svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      svg.setAttribute("style", "top: " + y + "px; left: " + x + "px");
      svg.appendChild(use);
      this.background.appendChild(svg);
    });_defineProperty(this, "createBackground",

    () => {
      const spacing = 60;
      const w = window.innerWidth;
      const h = window.innerHeight;
      for (let y = 0; y <= h; y += spacing) {
        if (y % (spacing * 2) === 0) {
          for (let x = 0; x <= w; x += spacing) {
            this.addElement(x, y);
          }
        } else {
          for (let x = -(spacing / 2); x <= w; x += spacing) {
            this.addElement(x, y);
          }
        }
      }
    });this.state = { levels: [{ id: 0, difficulty: "Easy", width: 10, bombs: 15 }, { id: 1, difficulty: "Medium", width: 15, bombs: 30 }, { id: 2, difficulty: "Hard", width: 18, bombs: 70 }], tiles: [], isGameOver: false, gameResult: "", isTimerOn: false, isModalOpen: false, isContainerAnimated: false, timeDisplay: 0, flagCount: 0, mainColors: ["#8B6AF5", "#74c2f9", "#42dfbc", "#f9dd5b", "#FEAC5E", "#ff5d9e", "#F29FF5", "#c154d8"], bgColors: ["#b39ffd", "#93c1fd", "#8af1f8", "#f9dd5b", "#FEAC5E", "#f87dae", "#f6b8f8", "#f7efce"] };this.state.root = document.documentElement;this.state.selectedLevel = this.state.levels[0];this.state.flagsLeft = this.state.selectedLevel.bombs;}componentDidMount() {console.log("hello");this.createBackground();this.createBoard();}

  render() {
    let grid = this.state.tiles.map((tile, index) => {
      return /*#__PURE__*/(
        React.createElement(Tile, { key: index, id: index, tile: tile, onTileClick: this.handleTileClick, onAddFlag: this.addFlag }));

    });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("svg", { id: "main", className: "hide" }, /*#__PURE__*/
      React.createElement("symbol", { id: "bomb-svg", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 786.7 687.8", width: "50px" }, /*#__PURE__*/
      React.createElement("path", { d: "M427.4,144.2l40.7-41.8a23.1,23.1,0,0,1,32.5,0l72.8,72.8a23.1,23.1,0,0,1,0,32.5l-37.4,37.4", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("circle", { cx: "291.1", cy: "385.2", r: "282.6", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("path", { d: "M540.2,141.2l15.4-20.5c12.6-16.8,30.4-17.7,43.6-2.4l0.3,0.3c11.8,13.7,31.3,22.6,48.3,11.4,6.1-4,20.7-20.5,20.7-20.5", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("line", { x1: "701.7", y1: "63.3", x2: "742", y2: "23.1", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("line", { x1: "713.2", y1: "107.4", x2: "766.2", y2: "128.2", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("line", { x1: "654.5", y1: "60.2", x2: "630.8", y2: "8.5", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("path", { d: "M82,396.8c0-118.4,95.9-214.3,214.3-214.3", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("g", { id: "Happy_face", "data-name": "Happy face" }, /*#__PURE__*/
      React.createElement("path", { d: "M170.4,432.1a34.6,34.6,0,0,1,69.2,0", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("path", { d: "M342.5,432.1a34.6,34.6,0,0,1,69.2,0", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" }), /*#__PURE__*/
      React.createElement("path", { d: "M367,481.7c0,33.7-33.4,64.1-74.6,64.1s-74.6-30.3-74.6-64.1", transform: "translate(0 -11.6)", fill: "none", stroke: "#39395b", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "17" })))), /*#__PURE__*/



      React.createElement("div", { id: "background", ref: el => this.background = el }), /*#__PURE__*/
      React.createElement(Modal, { gameResult: this.state.gameResult, show: this.state.isModalOpen, onReplay: this.replay, timeDisplay: this.state.timeDisplay }), /*#__PURE__*/
      React.createElement("div", { className: `container ${this.state.isContainerAnimated ? "shake" : ""}` }, /*#__PURE__*/
      React.createElement("div", { className: "header" }, /*#__PURE__*/
      React.createElement(Dropdown, { onLevelChange: this.updateLevel, levels: this.state.levels, selectedLevel: this.state.selectedLevel }), /*#__PURE__*/
      React.createElement("div", { id: "flag-countdown" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", id: "Capa_1", x: "0px", y: "0px", viewBox: "0 0 287.987 287.987", fill: "#fff", width: "30" }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", { d: "M228.702,141.029c-3.114-3.754-3.114-9.193,0-12.946l33.58-40.474c2.509-3.024,3.044-7.226,1.374-10.783   c-1.671-3.557-5.246-5.828-9.176-5.828h-57.647v60.98c0,16.618-13.52,30.138-30.138,30.138h-47.093v25.86   c0,5.599,4.539,10.138,10.138,10.138h124.74c3.93,0,7.505-2.271,9.176-5.828c1.671-3.557,1.135-7.759-1.374-10.783L228.702,141.029   z" }), /*#__PURE__*/React.createElement("path", { d: "M176.832,131.978V25.138c0-5.599-4.539-10.138-10.138-10.138H53.37c0-8.284-6.716-15-15-15s-15,6.716-15,15   c0,7.827,0,253.91,0,257.987c0,8.284,6.716,15,15,15s15-6.716,15-15c0-6.943,0-126.106,0-130.871h113.324   C172.293,142.116,176.832,137.577,176.832,131.978z" }))), /*#__PURE__*/React.createElement("span", { id: "flags-left" }, this.state.flagsLeft, " ")), /*#__PURE__*/
      React.createElement(Timer, { ref: "timer", onTimeChange: this.getTime, timeDisplay: this.state.timeDisplay })), /*#__PURE__*/


      React.createElement("div", { className: "grid" }, grid))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));