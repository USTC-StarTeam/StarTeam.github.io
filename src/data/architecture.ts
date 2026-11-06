// Homepage architecture narrative. These layers cooperate; this illustration is
// not a claim that all listed research directions are one deployed product.
export const architectureLayers = [
  {
    id: "data",
    title: "Data",
    number: "01",
    caption: "知识、样本与运行经验",
    chinese: "数据",
    description: "让知识与经验成为可用的学习依据。",
    tags: ["知识与样本", "数据选择", "样本组织", "运行记录", "经验积累"],
    note: "提供知识与运行依据",
  },
  {
    id: "model",
    title: "Model",
    number: "02",
    caption: "理解任务，形成决策",
    chinese: "模型",
    description: "连接任务理解、推理与能力改进。",
    tags: ["任务理解", "推理决策", "模型训练", "能力改进"],
    note: "理解任务，形成决策",
  },
  {
    id: "harness",
    title: "Harness",
    number: "03",
    caption: "组织工具、状态与执行",
    chinese: "运行框架",
    description: "将模型决策组织成可检查的执行过程。",
    tags: ["提示词", "工具调用", "流程编排", "状态管理", "检查与恢复"],
    note: "将决策转为执行步骤",
  },
  {
    id: "application",
    title: "Application",
    number: "04",
    caption: "面向真实场景与研究问题",
    chinese: "应用方向",
    description: "在具体问题中检验方法，获取反馈。",
    tags: ["推荐系统", "科研助手", "软件工程", "数据分析", "化工科研"],
    note: "研究应用方向，非已交付产品清单",
  },
] as const;
