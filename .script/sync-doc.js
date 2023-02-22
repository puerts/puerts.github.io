const { exec, mv, rm, mkdir } = require('@puerts/shell-util')
const { existsSync } = require('node:fs')

if (!existsSync('docusaurus.config.js')) throw new Error('invalid workdir');

exec('git clone --depth=1 https://github.com/Tencent/puerts.git')

mkdir('-p', 'doc/puerts')

rm('-rf', './doc/pic')
mv('puerts/doc/pic', './doc/pic')

rm('-rf', './doc/puerts/unreal')
mv('puerts/doc/unreal/zhcn', './doc/puerts/unreal')

rm('-rf', './doc/puerts/unity')
mv('puerts/doc/unity/zhcn', './doc/puerts/unity')

rm('-rf', 'puerts')