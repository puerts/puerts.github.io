
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  unity: [
    {
      type: 'category',
      label: '入门教程',
      items: [
        { label: '安装 PuerTS', type: 'doc', id: 'puerts/unity/install' },
        { label: 'Hello World', type: 'doc', id: 'puerts/unity/tutorial/runJS' },
        { label: 'JS 调用 C#指南', type: 'doc', id: 'puerts/unity/tutorial/js2cs' },
        { label: 'C# 调用 JS指南', type: 'doc', id: 'puerts/unity/tutorial/cs2js' },
      ]
    },
    {
      type: 'category',
      label: '善用JS生态',
      items: [
        { label: '模块加载', type: 'doc', id: 'puerts/unity/knowjs/module' },
        { label: '使用Typescript', type: 'doc', id: 'puerts/unity/knowjs/typescript' },
        { label: 'JS 调试', type: 'doc', id: 'puerts/unity/knowjs/debugging' },
        { label: 'WebGL 支持', type: 'doc', id: 'puerts/unity/knowjs/webgl' },
      ]
    },
    {
      type: 'category',
      label: '代码生成',
      items: [
        { label: 'Wrapper 生成', type: 'doc', id: 'puerts/unity/wrapper/wrapper' },
        { label: '生成过滤器', type: 'doc', id: 'puerts/unity/wrapper/filter' },
        { label: 'BlittableCopy GC 优化', type: 'doc', id: 'puerts/unity/wrapper/blittablecopy' },
        { label: 'C# 扩展函数', type: 'doc', id: 'puerts/unity/wrapper/extension' },
        { label: '所有生成配置一览', type: 'doc', id: 'puerts/unity/wrapper/all_attribute' },
      ]
    },
    {
      type: 'category',
      label: '其它指引',
      items: [
        { label: 'FAQ', type: 'doc', id: 'puerts/unity/faq' },
        { label: '版本升级指南', type: 'doc', id: 'puerts/unity/other/upgrade' },
        { label: '自行构建', type: 'doc', id: 'puerts/unity/other/building' },
        { label: '在DotNet项目中使用', type: 'doc', id: 'puerts/unity/other/dotnet' },
      ],
    },
    {
      type: 'category',
      label: '性能表现',
      items: [
        { label: '性能表现', type: 'doc', id: 'puerts/unity/performance/index' },
        { label: 'xIl2cpp模式(new)', type: 'doc', id: 'puerts/unity/performance/il2cpp' },
      ]
    },
    { label: '来自社区的 PuerTS 扩展', type: 'doc', id: 'puerts/unity/other/community' },
    {
      type: "link",
      href: "https://github.com/chexiongsheng/puerts_unity_demo.git",
      label: "官方Demo"
    }
  ],

  unreal: [
    { label: "安装 PuerTS", type: 'doc', id: 'puerts/unreal/install' },
    { label: "使用手册", type: 'doc', id: 'puerts/unreal/manual' },
    { label: "调试指南", type: 'doc', id: 'puerts/unreal/vscode_debug' },
    { label: "TS和引擎的相互调用", type: 'doc', id: 'puerts/unreal/interact_with_uclass' },
    { label: "基于模板的静态绑定", type: 'doc', id: 'puerts/unreal/template_binding' },
    { label: "扩展函数", type: 'doc', id: 'puerts/unreal/extension_methods' },
    { label: "继承引擎类", type: 'doc', id: 'puerts/unreal/uclass_extends' },
    { label: "蓝图Mixin", type: 'doc', id: 'puerts/unreal/mixin' },
    { label: "FAQ", type: 'doc', id: 'puerts/unreal/faq' },
    { label: "官方Demo", type: 'doc', id: 'puerts/unreal/demos' }
  ]

};

module.exports = sidebars;
