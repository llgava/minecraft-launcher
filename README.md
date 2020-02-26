# Minecraft Launcher · [![GitHub license](https://img.shields.io/badge/license-MIT-MIT?color=%23008542&style=flat-square)](https://gitlab.com/FyatLindu/minecraft-launcher/blob/master/LICENSE) ![npm](https://img.shields.io/npm/v/npm?color=%23008542&style=flat-square)

![Login and launcher screen](/concept/screens.png )

> **ATTENTION:** This is not a concept or build of the official Minecraft Launcher! **"Minecraft"** is a trademark of **Mojang Synergies AB**.

## Instalation and setup

1. Clone down this repository. You will need `node` and `npm` installed globally on your machine.

    * To use the lastest `npm` version, run this command on your terminal: `npm install npm@latest -g`

2. Install the project: `npm install ./`

3. Run the project: `npm start`

## For developers

### **CustomCheckbox**

| Property | Type   | Required | Values | Default      | Description                      |
|----------|--------|----------|--------|--------------|----------------------------------|
| text     | String | false    |    *   | Hello world! | Defines component text           |

### **CustomButton**

| Property     | Type       | Required     | Values                       | Default          | Description                         |
|--------------|------------|--------------|------------------------------|------------------|-------------------------------------|
| text         | String     | false        |            *                 | Hello world!     | Defines component text              |
| size         | String     | true         | small<br>normal<br>big       | null             | Defines component size              |
| design       | String     | true         | play<br>error                | null             | Defines component design            |

### **Toast**

| Property    | Type    | Required | Values                           | Default            | Description                              |
|-------------|---------|----------|----------------------------------|--------------------|------------------------------------------|
| text        | String  | false    |                 *                | Hello world!       | Defines component text                   |
| description | String  | false    |                 *                | Hello from Brazil! | Defines component description            |
| design      | String  | true     | normal<br>narrator<br>error      | null               | Defines component design                 |
| icon        | Module  | false    |                 *                | null               | Defines component icon                   |
| sound       | Boolean | false    |                 *                | true               | Enable component sound if declared       |

### **~~ExternalLink~~** (not working yet)

| Property  | Type    | Required | Values | Default      | Description                      |
|-----------|---------|----------|--------|--------------|----------------------------------|
| text      | String  | false    |    *   | Hello world! | Defines component text           |
| bold      | Boolean | false    |    *   | true         | Enable bold in the text          |
| underline | Boolean | false    |    *   | true         | Enable underline in the text     |

## Global components construction

By default all global components are located in `src/components/global/`

```js
// CustomCheckbox
import CustomCheckbox from '[...]/customCheckbox';

<CustomCheckbox text="Your text here" />
```

```js
// CustomButton
import CustomButton from '[...]/customButton';

<CustomButton design="play" size="normal" text="Your text here" />
```

```js
// Toast
import Toast from '[...]/toast';
import Icon from '[...]'; /* Recomended format: PNG, JPG, JPGE or GIF*/

/*
If you want a icon, you need to import then.
If you don't want a icon, remove the property 'icon' from the component bellow. 
*/

<Toast design="normal" icon={Icon} text="Your text here" description="Your description here" sound />
```

---

## Credits

All background images was created by Wytze Flietstra [@RobotPantaloons](https://twitter.com/RobotPantaloons "Wytze Flietstra Twitter") - <an.robotpantaloons@gmail.com>
His website: <https://www.robotpantaloons.com/>

## Contact

Leonardo Luiz Gava - [@FyatLindu](https://twitter.com/llgava "Leonardo Luiz Gava Twitter") - <llgavamt@gmail.com>
