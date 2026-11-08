import { architectureLayers } from "./architecture";

// The Excel classification is the formal source for layer ownership. Every
// second-level step links to at least one paper; the complete record remains
// on /publications.
export const researchLayers = [
  {
    ...architectureLayers[0],
    steps: [
      { title: "数据生成与再生成", description: "根据任务需求重构或生成训练序列，把数据本身作为优化对象。", paperIds: ["p009-2026", "dr4sr-2024"] },
      { title: "数据增强与蒸馏", description: "从大规模交互中提炼可复用的训练信号，提升数据密度与跨模型利用率。", paperIds: ["p004-2026", "td3-2025"] },
      { title: "数据评价与选择", description: "用信息量、奖励变化和数据效用判断样本价值，决定哪些数据进入下一轮训练。", paperIds: ["entropy-law-2024", "p022-2026"] },
      { title: "持续反馈", description: "让模型生成、训练和应用结果反过来更新数据，形成持续自改进循环。", paperIds: ["rsir-2026", "p004-2026"] },
    ],
  },
  {
    ...architectureLayers[1],
    steps: [
      { title: "模型架构与表示", description: "通过信息交互、注意力和模块组合改变信息组织方式，提升表示能力与可扩展性。", paperIds: ["p027-2026", "p039-2025"] },
      { title: "长序列建模", description: "围绕长上下文、时间关系和序列压缩设计高效的信息处理机制，保留远距离依赖并控制计算成本。", paperIds: ["p008-2026", "p021-2026"] },
      { title: "生成式建模", description: "通过扩散、检索和统一生成组织不同任务，扩展模型的输出形式与任务边界。", paperIds: ["p060-2024", "p043-2025", "p040-2025"] },
      { title: "训练与推理策略", description: "通过蒸馏、规划、检索和协同解码调整训练与推理过程，在质量、效率和泛化之间取得平衡。", paperIds: ["p006-2026", "p050-2025", "p023-2026"] },
    ],
  },
  {
    ...architectureLayers[2],
    steps: [
      { title: "任务规划", description: "把复杂用户目标拆解为可执行的交互步骤，并利用中间思考提升任务泛化。", paperIds: ["p025-2026"] },
      { title: "上下文与解码", description: "在完整任务上下文与受限推理成本之间进行信息压缩和生成控制。", paperIds: ["p001-2026"] },
    ],
  },
  {
    ...architectureLayers[3],
    steps: [
      { title: "推荐与用户代理", description: "在真实用户目标和行为变化中验证个性化建模、检索和代理能力。", paperIds: ["p024-2026", "p058-2024", "p069-2024"] },
      { title: "科学与专业任务", description: "将模型带入化学等专业场景，检验知识组织、能力评测和领域推理。", paperIds: ["p029-2025", "p003-2026"] },
      { title: "检索增强生成", description: "通过检索、结构化信息和交错生成处理开放域与多源知识任务。", paperIds: ["p049-2025"] },
      { title: "个性化与校准", description: "在实际输出中调整用户偏好、排序结果和生成策略，使系统更贴近使用目标。", paperIds: ["p013-2026", "p034-2025"] },
    ],
  },
] as const;
