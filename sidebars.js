
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  unity: [
    {
      type: 'category',
      label: '入门教程',
      items: [
        { label: '安装 PuerTS', type: 'doc', id: 'unity/install' },
        { label: 'Hello World', type: 'doc', id: 'unity/tutorial/runJS' },
        { label: 'JS 调用 C#指南', type: 'doc', id: 'unity/tutorial/js2cs' },
        { label: 'C# 调用 JS指南', type: 'doc', id: 'unity/tutorial/cs2js' },
        { label: '模块加载', type: 'doc', id: 'unity/tutorial/module' },
        { label: '使用Typescript', type: 'doc', id: 'unity/tutorial/typescript' },
      ]
    },
    {
      type: 'category',
      label: '代码生成',
      items: [
        { label: 'Wrapper 生成', type: 'doc', id: 'unity/wrapper/wrapper' },
        { label: '生成过滤器', type: 'doc', id: 'unity/wrapper/filter' },
        { label: 'BlittableCopy GC 优化', type: 'doc', id: 'unity/wrapper/blittablecopy' },
        { label: 'C# 扩展函数', type: 'doc', id: 'unity/wrapper/extension' },
        { label: '所有生成配置一览', type: 'doc', id: 'unity/wrapper/all_attribute' },
      ]
    },
    {
      type: 'category',
      label: '进阶指引',
      items: [
        { label: 'FAQ', type: 'doc', id: 'unity/faq' },
        { label: 'JS 调试', type: 'doc', id: 'unity/other/debugging' },
        { label: '其他 JS 后端', type: 'doc', id: 'unity/other/backend' },
        { label: '自行构建', type: 'doc', id: 'unity/other/building' },
      ],
    },
    {
      type: 'category',
      label: '更多',
      items: [
        { label: '来自社区的 PuerTS 扩展', type: 'doc', id: 'unity/other/community' }
      ]
    },
    {
      type: "link",
      href: "https://github.com/chexiongsheng/puerts_unity_demo.git",
      label: "官方Demo"
    }
  ],

  unreal: [
    { label: "安装 PuerTS", type: 'doc', id: 'unreal/install' },
    { label: "使用手册", type: 'doc', id: 'unreal/manual' },
    { label: "调试指南", type: 'doc', id: 'unreal/vscode_debug' },
    { label: "TS和引擎的相互调用", type: 'doc', id: 'unreal/interact_with_uclass' },
    { label: "基于模板的静态绑定", type: 'doc', id: 'unreal/template_binding' },
    { label: "扩展函数", type: 'doc', id: 'unreal/extension_methods' },
    { label: "继承引擎类", type: 'doc', id: 'unreal/uclass_extends' },
    { label: "蓝图Mixin", type: 'doc', id: 'unreal/mixin' },
    { label: "FAQ", type: 'doc', id: 'unreal/faq' },
    {
      type: "link",
      href: "https://github.com/chexiongsheng/puerts_unreal_demo.git",
      label: "官方Demo"
    }
  ]

};

module.exports = sidebars;
