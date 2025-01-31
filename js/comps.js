const layoutBorder2 = () => {
  Ext.create("Ext.Viewport", {
    layout: "border",
    defaults: {
      frame: true,
      split: true,
    },
    items: [
      {
        title: "North Panel",
        region: "north",
        height: 100,
        minHeight: 100,
        maxHeight: 150,
        collapsible: true,
      },
      {
        title: "South Panel",
        region: "south",
        height: 75,
        split: false,
        margins: {
          top: 5,
        },
      },
      {
        title: "East Panel",
        region: "east",
        width: 100,
        minWidth: 75,
        maxWidth: 150,
        collapsible: true,
      },
      {
        title: "West Panel",
        region: "west",
        collapsible: true,
        collapseMode: "mini",
        minWidth: 100,
      },
      {
        xtype: "container",
        region: "center",
        layout: "fit",
        id: "centerRegion",
        autoEl: {},
        items: {
          title: "Center Region",
          id: "centerPanel",
          html: "I am disposable",
          frame: true,
        },
      },
    ],
  });

  var centerPanel = Ext.getCmp("centerPanel");
  var centerRegion = Ext.getCmp("centerRegion");

  centerRegion.remove(centerPanel, true);
  centerRegion.add({
    xtype: "form",
    frame: true,
    bodyStyle: "padding: 5px",
    defaultType: "field",
    title: "Please enter some information",
    defaults: {
      anchor: "-10",
    },
    items: [
      {
        fieldLabel: "First Name",
      },
      {
        fieldLabel: "Last Name",
      },
      {
        xtype: "textarea",
        fieldLabel: "Bio",
      },
    ],
  });
};

const layoutBorder = () => {
  Ext.create("Ext.Viewport", {
    layout: "border",
    defaults: {
      frame: true,
      split: true,
    },
    items: [
      {
        title: "North Panel",
        region: "north",
        height: 100,
        minHeight: 100,
        maxHeight: 150,
        collapsible: true,
      },
      {
        title: "South Panel",
        region: "south",
        height: 75,
        split: false,
        margins: {
          top: 5,
        },
      },
      {
        title: "East Panel",
        region: "east",
        width: 100,
        minWidth: 75,
        maxWidth: 150,
        collapsible: true,
      },
      {
        title: "West Panel",
        region: "west",
        collapsible: true,
        collapseMode: "mini",
        width: 100,
      },
      {
        xtype: "container",
        region: "center",
        layout: "fit",
        id: "centerRegion",
        autoEl: {},
        items: {
          title: "Center Panel",
          id: "centerPanel",
          html: "I am disposable",
          frame: true,
        },
      },
    ],
  });
};

const layoutTable2 = () => {
  var myWin = Ext.create("Ext.Window", {
    height: 300,
    width: 300,
    border: false,
    autoScroll: true,
    id: "myWin",
    title: "A Window with a Table layout",
    layout: {
      type: "table",
      columns: 3,
    },
    defaults: {
      height: 50,
      width: 50,
    },
    items: [
      {
        html: "1",
        colspan: 3,
        width: 150,
      },
      {
        html: "2",
        rowspan: 2,
        height: 100,
      },
      {
        html: "3",
      },
      {
        html: "4",
        rowspan: 2,
        height: 100,
      },
      {
        html: "5",
      },
      {
        html: "6",
      },
      {
        html: "7",
      },
      {
        html: "8",
      },
      {
        html: "9",
        colspan: 3,
        width: 150,
      },
    ],
  });

  myWin.show();
};

const layoutTable = () => {
  var myWin = Ext.create("Ext.Window", {
    height: 300,
    width: 300,
    border: false,
    autoScroll: true,
    id: "myWin",
    title: "A Window with a Table layout",
    layout: {
      type: "table",
      columns: 3,
    },
    defaults: {
      height: 50,
      width: 50,
    },
    items: [
      {
        html: "1",
      },
      {
        html: "2",
      },
      {
        html: "3",
      },
      {
        html: "4",
      },
      {
        html: "5",
      },
      {
        html: "6",
      },
      {
        html: "7",
      },
      {
        html: "8",
      },
      {
        html: "9",
      },
    ],
  });

  myWin.show();
};

const layoutVbox = () => {
  Ext.create("Ext.Window", {
    layout: {
      type: "vbox",
      pack: "end",
      align: "center",
    },
    height: 300,
    width: 300,
    title: "A Container with a VBox layout",
    defaults: {
      frame: true,
      width: 75,
    },
    items: [
      {
        title: "Panel 1",
        flex: 1,
      },
      {
        title: "Panel 2",
        flex: 1,
      },
      {
        title: "Panel 3",
        flex: 2,
      },
    ],
  }).show();
};

const layoutHbox = () => {
  Ext.create("Ext.Window", {
    layout: {
      type: "hbox",
      pack: "start",
    },
    height: 300,
    width: 300,
    title: "A Container with an HBox layout",
    defaults: {
      frame: true,
      width: 50,
    },
    items: [
      {
        title: "Panel 1",
        height: 100,
      },
      {
        title: "Panel 2",
        height: 75,
        width: 100,
      },
      {
        title: "Panel 3",
        height: 200,
      },
    ],
  }).show();
};

const layoutColumn = () => {
  var myWin = Ext.create("Ext.Window", {
    height: 200,
    width: 400,
    autoScroll: true,
    id: "myWin",
    title: "A Window with a Column layout",
    layout: "column",
    defaults: {
      frame: true,
    },
    items: [
      {
        title: "Col 1",
        id: "col1",
        columnWidth: 0.3,
      },
      {
        title: "Col 2",
        html: "20% relative width",
        columnWidth: 0.2,
      },
      {
        title: "Col 3",
        html: "100px fixed width",
        width: 100,
      },
      {
        title: "Col 4",
        frame: true,
        html: "50% relative width",
        columnWidth: 0.5,
      },
    ],
    renderTo: Ext.getBody(),
  });

  myWin.show();
};

const layoutCard = () => {
  var handleNav = function (btn) {
    var activeItem = myWin.layout.activeItem,
      index = myWin.items.indexOf(activeItem),
      numItems = myWin.items.getCount(),
      indicatorEl = Ext.getCmp("indicator").el;

    if (btn.text == "Forward" && index < numItems - 1) {
      index++;
      myWin.layout.setActiveItem(index);
      index++;
      indicatorEl.update(index + " of " + numItems);
    } else if (btn.text == "Back" && index > 0) {
      myWin.layout.setActiveItem(index - 1);
      indicatorEl.update(index + " of " + numItems);
    }
  };

  var myWin = Ext.create("Ext.Window", {
    height: 200,
    width: 300,
    autoScroll: true,
    id: "myWin",
    title: "A Window with a Card layout",
    layout: "card",
    activeItem: 0,
    defaults: { border: false },
    items: [
      {
        xtype: "form",
        title: "General info",
        bodyStyle: "padding: 5px",
        defaultType: "field",
        labelWidth: 50,
        items: [
          {
            fieldLabel: "Name",
            anchor: "-10",
          },
          {
            xtype: "numberfield",
            fieldLabel: "Age",
            size: 3,
            anchor: "-10",
          },
          {
            xtype: "combo",
            fieldLabel: "Location",
            anchor: "-10",
            store: ["Here", "There", "Anywhere"],
          },
        ],
      },
      {
        xtype: "panel",
        title: "Bio",
        layout: "fit",
        items: {
          xtype: "textarea",
          value: "Tell us about yourself",
        },
      },
      {
        title: "Congratulations",
        html: "Thank you for filling out our form!",
      },
    ],
    dockedItems: [
      {
        xtype: "toolbar",
        dock: "bottom",
        items: [
          {
            text: "Back",
            handler: handleNav,
          },
          "-",
          {
            text: "Forward",
            handler: handleNav,
          },
          "->",
          {
            type: "component",
            id: "indicator",
            style: "margin-right: 5px",
            html: "1 of 3",
          },
        ],
      },
    ],
  });

  myWin.show();
};

const layoutAccordion = () => {
  var myWin = Ext.create("Ext.Window", {
    height: 200,
    width: 300,
    border: false,
    title: "A Window with an Accordion layout",
    layout: "accordion",
    layoutConfig: {
      animate: false,
    },
    items: [
      {
        xtype: "form",
        title: "General info",
        bodyStyle: "padding: 5px",
        defaultType: "textfield",
        fieldDefaults: {
          labelWidth: 50,
        },
        items: [
          {
            fieldLabel: "Name",
            anchor: "-10",
            width: 20,
          },
          {
            xtype: "field",
            fieldLabel: "Age",
            anchor: "-10",
            size: 3,
          },
          {
            xtype: "combo",
            fieldLabel: "Location",
            anchor: "-10",
            store: ["Here", "There", "Anywhere"],
          },
        ],
      },
      {
        xtype: "panel",
        autoEl: {},
        title: "Bio",
        layout: "fit",
        items: {
          xtype: "textarea",
          value: "Tell us about yourself",
        },
      },
      {
        title: "Instructions",
        html: "Please enter information.",
        tools: [{ id: "gear" }, { id: "help" }],
      },
    ],
  });

  myWin.show();
};

const layoutFit = () => {
  var myWin = Ext.create("Ext.Window", {
    height: 200,
    width: 200,
    layout: "fit",
    autoScroll: true,
    border: false,
    items: [
      {
        title: "Panel1",
        html: "I fit in my parent!",
        frame: true,
      },
    ],
  });

  myWin.show();
};

const layoutAnchor2 = () => {
  var myWin = Ext.create("Ext.Window", {
    height: 300,
    width: 300,
    layout: "anchor",
    autoScroll: true,
    border: false,
    anchorSize: "400",
    items: [
      {
        title: "Panel1",
        anchor: "-50, -150",
        frame: true,
      },
      {
        title: "Panel2",
        anchor: "-10, -150",
        frame: true,
      },
    ],
  });

  myWin.show();
};

const layoutAuto = () => {
  var childPnl1 = {
    frame: true,
    height: 50,
    html: "My First Child Panel",
    title: "First children are fun",
  };

  var childPnl2 = {
    xtype: "panel",
    html: "Second child",
    title: "Second children have all the fun!",
  };

  var myWin = Ext.create("Ext.Window", {
    height: 300,
    width: 300,
    title: "A window with a container layout",
    autoScroll: true,
    items: [childPnl1, childPnl2],
    tbar: [
      {
        text: "Add child",
        handler: function () {
          var numItems = myWin.items.getCount() + 1;
          myWin.add({
            title: "Child number " + numItems,
            height: 60,
            width: 300,
            frame: true,
            collapsible: true,
            collapsed: true,
            html: "Yay, another child!",
          });
          myWin.updateLayout();
        },
      },
    ],
  });

  myWin.show();
};

const tabPanel = () => {
  var simpleTab = {
    title: "Personal Information",
    html: "This is my first tab!",
  };

  var closableTab = {
    title: "Other Information",
    html: "Please close when done reading.",
  };

  var disabledTab = {
    title: "Disabled tab",
    itemId: "disabledTab",
    html: "Peekaboo!",
    disabled: true,
    closable: true,
  };

  var tabPanel = Ext.create("Ext.tab.Panel", {
    activeTab: 0,
    itemId: "myTPanel",
    items: [simpleTab, closableTab, disabledTab],
  });

  Ext.create("Ext.window.Window", {
    height: 300,
    width: 400,
    layout: "fit",
    items: tabPanel,
  }).show();

  //        Ext.getCmp('myTPanel').unhitemIdeTabStripItem('disabledTab');

  var embeddedTabPanel = {
    xtype: "tabpanel",
    title: "My second tab",
    closable: true,
    activeTab: 0,
    items: [
      {
        title: "Inner tab 1",
      },
      {
        title: "Inner tab 2",
      },
    ],
  };

  var complexTab = {
    title: "A Complex tab",
    layout: "border",
    defaults: {
      frame: true,
      split: true,
    },
    items: [
      {
        html: "Center Panel",
        region: "center",
      },
      {
        html: "North Panel",
        region: "north",
        height: 25,
      },
      {
        html: "West Panel",
        region: "west",
        height: 25,
      },
    ],
  };

  var tPanel = Ext.ComponentQuery.query("#myTPanel")[0];
};

const messageBox2 = () => {
  Ext.MessageBox.show({
    title: "Hold on there cowboy!",
    msg: "We're doing something...",
    progressText: "Initializing...",
    width: 300,
    progress: true,
    closable: false,
  });

  var updateFn = function (num) {
    return function () {
      if (num == 6) {
        Ext.MessageBox.updateProgress(100, "All Items saved!");
        Ext.Function.defer(Ext.MessageBox.hide, 1500, Ext.MessageBox);
      } else {
        var i = num / 6;
        var pct = Math.round(100 * i);
        Ext.MessageBox.updateProgress(i, pct + "% completed");
      }
    };
  };

  for (var i = 1; i < 7; i++) {
    setTimeout(updateFn(i), i * 500);
  }
};

const messageBox1 = () => {
  var console = window.console;
  var myCallback = function (btn, text) {
    console.info("You pressed " + btn);
    if (text) {
      console.info("You entered : " + text);
    }
  };

  var msg = "Your document was saved successfully";
  var title = "Save Status";
  Ext.MessageBox.alert(title, msg);

  Ext.defer(function () {
    Ext.Msg.show({
      title: "Hold on there cowboy!",
      msg: "Are you sure you want to reboot the internet?",
      width: 300,
      buttons: Ext.MessageBox.YESNOCANCEL,
      fn: myCallback,
      icon: Ext.MessageBox.ERROR,
    });
  }, 2000);

  Ext.defer(function () {
    Ext.MessageBox.wait("We're doing something...", "Hold on...");
  }, 4000);
};

const modalWindow = () => {
  var win = Ext.create("Ext.window.Window", {
    height: 75,
    width: 200,
    modal: true,
    title: "This is one rigid window",
    html: "Try to move or resize me. I dare you.",
    plain: true,
    border: false,
    resizable: false,
    draggable: false,
    closable: false,
    buttonAlign: "center",
    buttons: [
      {
        text: "I give up!",
        handler: function () {
          win.close();
        },
      },
    ],
  });
  win.show();
};

const animatedWindow = () => {
  var win;
  var newWindow = function (btn) {
    if (!win) {
      win = Ext.create("Ext.window.Window", {
        animateTarget: btn.el,
        html: "My first vanilla Window",
        closeAction: "hide",
        id: "myWin",
        height: 200,
        width: 300,
        constrain: true,
      });
    }
    win.show();
  };
  Ext.create("Ext.button.Button", {
    renderTo: Ext.getBody(),
    text: "Open my Window",
    style: "margin: 100px",
    handler: newWindow,
  });
};

const panelToolbar4 = () => {
  var allButtons = [{ text: "Btn 1" }, { text: "Btn 2" }, { text: "Btn 3" }];

  var topDockedToolbar = {
    // 2
    xtype: "toolbar",
    dock: "top",
    items: allButtons,
  };

  var bottomDockedToolbar = {
    xtype: "toolbar",
    dock: "bottom",
    items: allButtons,
  };

  var leftDockedToolbar = {
    xtype: "toolbar",
    vertical: true,
    weight: 10,
    dock: "left",
    items: allButtons,
  };

  var rightDockedToolbar = {
    xtype: "toolbar",
    vertical: true,
    weight: 10,
    dock: "right",
    items: allButtons,
  };

  var myPanel = Ext.create("Ext.panel.Panel", {
    width: 350,
    height: 250,
    title: "Ext Panels rock!",
    renderTo: Ext.getBody(),
    html: "Content body",
    buttons: {
      weight: -1,
      items: allButtons,
    },
    dockedItems: [
      // 3
      topDockedToolbar,
      bottomDockedToolbar,
      leftDockedToolbar,
      rightDockedToolbar,
    ],
  });
};

const panelToolbar3 = () => {
  var allButtons = [
    // 1
    { text: "Btn 1" },
    { text: "Btn 2" },
    { text: "Btn 3" },
  ];

  var topDockedToolbar = {
    // 2
    xtype: "toolbar",
    dock: "top",
    items: allButtons,
  };

  var myPanel = Ext.create("Ext.panel.Panel", {
    width: 350,
    height: 250,
    title: "Ext Panels rock!",
    renderTo: Ext.getBody(),
    html: "Content body",
    buttons: {
      items: allButtons,
    },
    dockedItems: [
      // 3
      topDockedToolbar,
    ],
  });
};

const panelToobar2 = () => {
  const myBtnHandler = function (btn) {
      // 1
      Ext.MessageBox.alert("You Clicked", btn.text);
    },
    fileBtn = Ext.create("Ext.button.Button", {
      // 2
      text: "File",
      handler: myBtnHandler,
    }),
    editBtn = Ext.create("Ext.button.Button", {
      // 3
      text: "Edit",
      handler: myBtnHandler,
    }),
    tbFill = new Ext.toolbar.Fill(); // 4

  var myTopToolbar = Ext.create("Ext.toolbar.Toolbar", {
    // 5
    items: [fileBtn, tbFill, editBtn],
  });

  var myBottomToolbar = [
    // 6
    {
      text: "Save",
      handler: myBtnHandler,
    },
    "-", // vertical divider
    {
      text: "Cancel",
      handler: myBtnHandler,
    },
    "->", // pull right
    "<b>Items open: 1</b>",
  ];

  var myPanel = Ext.create("Ext.panel.Panel", {
    width: 200,
    height: 150,
    title: "Ext Panels rock!",
    collapsible: true,
    renderTo: Ext.getBody(),
    tbar: myTopToolbar,
    bbar: myBottomToolbar,
    html: "My first Toolbar Panel!",
    buttons: [
      {
        text: "Press me!",
        handler: myBtnHandler,
      },
    ],
    tools: [
      {
        type: "gear",
        handler: function (evt, toolEl, panel) {
          debugger;
          var toolClassNames = toolEl.dom.className.split(" ");
          var toolClass = toolClassNames[1];
          var toolId = toolClass.split("-")[2];

          Ext.MessageBox.alert("You Clicked", "Tool " + toolId);
        },
      },
      {
        type: "help",
        handler: function () {
          Ext.MessageBox.alert("You Clicked", "The help tool");
        },
      },
    ],
  });
};

const panelToobars = () => {
  var myBtnHandler = function (btn) {
      // 1
      Ext.MessageBox.alert("You Clicked", btn.text);
    },
    fileBtn = Ext.create("Ext.button.Button", {
      // 2
      text: "File",
      handler: myBtnHandler,
    }),
    editBtn = Ext.create("Ext.button.Button", {
      // 3
      text: "Edit",
      handler: myBtnHandler,
    }),
    tbFill = new Ext.toolbar.Fill(); // 4

  var myTopToolbar = Ext.create("Ext.toolbar.Toolbar", {
    // 5
    items: [fileBtn, tbFill, editBtn],
  });

  var myBottomToolbar = [
    // 6
    {
      text: "Save",
      handler: myBtnHandler,
    },
    "-", // vertical divider
    {
      text: "Cancel",
      handler: myBtnHandler,
    },
    "->", // pull right
    "<b>Items open: 1</b>",
  ];

  var myPanel = Ext.create("Ext.panel.Panel", {
    width: 200,
    height: 150,
    title: "Ext Panels rock!",
    collapsible: true,
    renderTo: Ext.getBody(),
    tbar: myTopToolbar,
    bbar: myBottomToolbar,
    html: "My first Toolbar Panel!",
  });
};

componentQuery = () => {
  // I'm using textmate while sitting on an airplane headed to SF CA to build this example.
  // If this file contains hard tabs, my sincere apologies.

  var buildNestedPanel = function (itemId) {
    var unique = Math.floor(Math.random() * 1000);
    return {
      title: "itemId : " + itemId,
      level: 3,
      layout: "fit",
      flex: 1,
      frame: true,
      itemId: itemId,
      items: {
        html:
          "itemId: " +
          itemId +
          "_gc1,<br />grandchild: true,<br />unique: " +
          unique,
        itemId: itemId + "_gc1",
        unique: unique,
        bodyStyle: "padding: 10px; background-color: #E9F9F9	;",
        grandchild: true,
      },
    };
  };

  var genChildPanels = function (itemId) {
    return {
      title: "itemId: " + itemId,
      itemId: itemId,
      flex: 1,
      level: 2,
      frame: true,
      layout: {
        type: "hbox",
        align: "stretch",
      },
      items: [
        buildNestedPanel(itemId + "_c1"),
        buildNestedPanel(itemId + "_c2"),
        buildNestedPanel(itemId + "_c3"),
      ],
    };
  };

  var submitHandler = function () {
    var ownrPnl = this.up("panel")[0],
      tf = this.ownerCt.query("#queryEditor")[0],
      query = tf.getRawValue(),
      items;

    if (query.length < 1) {
      Ext.MessageBox.alert(
        "Error!",
        "The query editor cannot be left blank!",
        function () {
          tf.el.frame("#F00");
          tf.focus();
        }
      );
      return;
    } else {
      items = Ext.ComponentQuery.query(query);
    }

    if (items.length < 1) {
      if (console.warn) {
        console.warn("No items found using:", query);
      }
    } else {
      if (console.info) {
        console.info("found " + query.length + " items using query: ", query);
      }
      Ext.each(items, function (item) {
        if (console.log) {
          console.log(item);
        }
        item.rendered && item.el.fadeOut().fadeIn();
      });
    }
  };

  var bottomToolbar = {
    xtype: "toolbar",
    dock: "bottom",
    items: [
      "Ext.ComponentQuery.query('",
      {
        xtype: "textfield",
        itemId: "queryEditor",
        flex: 1,
      },
      "');",
      "->",
      {
        text: "Submit query",
        handler: submitHandler,
      },
    ],
  };
  Ext.create("Ext.container.Viewport", {
    layout: "fit",
    items: {
      itemId: "master_panel",
      layout: {
        type: "vbox",
        align: "stretch",
      },
      items: [genChildPanels("p1"), genChildPanels("p2"), genChildPanels("p3")],
      dockedItems: [bottomToolbar],
    },
  });
};

container1 = () => {
  const panel1 = {
    html: "I am Panel1",
    id: "panel1",
    frame: true,
    height: 100,
  };
  const panel2 = {
    html: "<b>I am Panel2</b>",
    id: "panel2",
    frame: true,
  };
  const myWin = Ext.create("Ext.window.Window", {
    id: "myWin",
    height: 400,
    width: 400,
    items: [panel1, panel2],
  });

  myWin.add({
    title: "Appended Panel",
    id: "addedPanel",
    html: "Hello there!",
  });
  myWin.insert(1, {
    title: "Inserted Panel",
    id: "insertedPanel",
    html: "It is cool here!",
  });
  myWin.add({
    xtype: "button",
    html: "Del Appended Panel",
    handler: () => {
      const panel = Ext.getCmp("addedPanel");
      Ext.getCmp("myWin").remove(panel);
    },
  });
  myWin.add({
    xtype: "button",
    html: "Copy",
    handler: () => {
      const panel = Ext.getCmp("insertedPanel");
      Ext.getCmp("myWin").remove(panel, false);
      Ext.getCmp("panel1").add(panel);
    },
  });
  myWin.show();
};

components2 = () => {
  const panel = Ext.create("Ext.window.Window", {
    width: 200,
    height: 150,
    title: "Accordion window",
    border: false,
    layout: {
      type: "accordion",
      animate: true,
    },
    items: [
      {
        xtype: "panel",
        title: "Plain Panel",
        html: "Panel with an xtype specified",
      },
      {
        title: "Plain Panel 2",
        html: "Panel with <b>no</b> xtype specified",
      },
    ],
  });
  panel.show();
  // panel.render(document.body);
};

components1 = () => {
  const panel1 = {
    xtype: "panel",
    title: "Plain Panel",
    html: "Panel with an xtype specified",
  };
  const panel2 = {
    title: "Plain Panel 2",
    html: "Panel with <b>no</b> xtype specified",
  };

  Ext.create("Ext.window.Window", {
    width: 200,
    height: 150,
    title: "Accordion window",
    border: false,
    layout: {
      type: "accordion",
      animate: true,
    },
    items: [panel1, panel2],
  }).show();
};
