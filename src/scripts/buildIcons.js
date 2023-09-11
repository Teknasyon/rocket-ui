import util from '@mdi/util';

const meta = util.getMeta(true);

// eslint-disable-next-line
const find = /(\-\w)/g;
const convert = function ([_, matches]) {
  return matches.toUpperCase();
};

const lines = meta.map((icon) => {
  let name = icon.name.replace(find, convert);
  name = `${name[0].toUpperCase()}${name.slice(1)}`;

  return `mdi${name} : "${icon.path}"`;
});

const outputTS = `// Material Design Icons v${util.getVersion()}\n
const svg =
 {\n${lines.join(',\n')}\n}\nexport default svg`;

util.write('src/assets/icons/mdi.js', outputTS);
