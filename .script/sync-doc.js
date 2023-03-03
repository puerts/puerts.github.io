const { exec, mv, rm, mkdir, cp } = require('@puerts/shell-util')
const { existsSync } = require('node:fs')

if (!existsSync('docusaurus.config.js')) throw new Error('invalid workdir');

exec('git clone --depth=1 https://github.com/Tencent/puerts.git')

mkdir('-p', './doc/puerts')
mkdir('-p', './i18n/en/docusaurus-plugin-content-docs/current/puerts')

rm('-rf', './doc/pic')
cp('-r', 'puerts/doc/pic', './doc/')

rm('-rf', './doc/puerts/unreal')
mv('puerts/doc/unreal/zhcn', './doc/puerts/unreal')

rm('-rf', './doc/puerts/unity')
mv('puerts/doc/unity/zhcn', './doc/puerts/unity')

rm('-rf', './i18n/en/docusaurus-plugin-content-docs/current/pic')
cp('-r', 'puerts/doc/pic', './i18n/en/docusaurus-plugin-content-docs/current/')

rm('-rf', './i18n/en/docusaurus-plugin-content-docs/current/puerts/unreal')
mv('puerts/doc/unreal/en', './i18n/en/docusaurus-plugin-content-docs/current/puerts/unreal')

rm('-rf', './i18n/en/docusaurus-plugin-content-docs/current/puerts/unity')
mv('puerts/doc/unity/en', './i18n/en/docusaurus-plugin-content-docs/current/puerts/unity')

rm('-rf', 'puerts')