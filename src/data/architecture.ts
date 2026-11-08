// Homepage architecture narrative. These layers cooperate; this illustration is
// not a claim that all listed research directions are one deployed product.
export const architectureLayers = [
  {
    id: "data",
    title: "Data",
    number: "01",
    caption: "组织动态数据，驱动闭环学习",
    chinese: "动态数据系统",
    description: "从静态数据集走向动态数据对象，让任务需求、模型短板、环境变化与执行反馈持续转化为可学习、可评价、可更新的数据。",
    tags: ["数据生成", "数据评价", "选择与调度", "反馈沉淀", "可信治理"],
    note: "数据是系统持续演化的载体",
  },
  {
    id: "model",
    title: "Model",
    number: "02",
    caption: "从数据中形成可泛化能力",
    chinese: "能力学习系统",
    description: "围绕模型架构、表示、训练策略、生成与推理组织可泛化能力，并在质量、效率与部署约束之间找到稳定的设计边界。",
    tags: ["架构修改", "表示与压缩", "生成机制", "训练策略", "效率与泛化"],
    note: "从单点性能走向可迁移能力",
  },
  {
    id: "harness",
    title: "Harness",
    number: "03",
    caption: "把模型能力组织成可靠执行",
    chinese: "任务运行框架",
    description: "通过上下文、检索、记忆、规划、工具和解码控制，把模型能力编排成可执行、可验证、可反馈的任务过程。",
    tags: ["上下文组织", "检索与记忆", "Agent 规划", "工具与解码", "验证与反馈"],
    note: "让模型进入动态任务环境",
  },
  {
    id: "application",
    title: "Application",
    number: "04",
    caption: "在真实任务中验证并产生反馈",
    chinese: "领域应用系统",
    description: "将数据、模型与运行框架带入推荐、科研与其他复杂场景，在真实约束中验证方法，并把结果反馈到下一轮系统改进。",
    tags: ["推荐系统", "AI for Science", "科研助手", "多模态任务", "工程闭环"],
    note: "真实任务定义问题，反馈推动改进",
  },
] as const;
