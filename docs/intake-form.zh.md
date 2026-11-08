# 信息收集表（论文 + 组内作者）

> 可以直接复制给组员填。**一篇论文一份 A，每位组内作者一份 B。**
> 外部合作者不用填 B，只要 A 里的名字拼对、顺序对。
> 字段为什么这么收，见 `docs/info-checklist.zh.md`。

---

## A. 论文（一篇一份）

**A1 · 基本信息**

- 论文标题（照期刊页面的英文原题）：
- 发表年份：
- 期刊 / 会议全称：
- DOI（只写 `10.` 开头那段，不要带网址）：
- PMID：
- PMCID（如 `PMC1234567`）：
- 论文类型：研究论文 / 综述 / 快报或评论
- 是否开放获取（能免费下载全文）：
- 第一作者：
- 通讯作者：
- 共同一作 / 共同通讯（有就写名字，没有写“无”）：

**A2 · 作者与贡献**

- 完整作者名单（**按署名顺序**，用 `姓 名首字母`，逗号分隔）：
- 其中属于我们课题组的作者（写名字 + 第几位）：
- 需要打 `*` 的共同一作 / 共同通讯（没有写“无”）：

**A3 · 分类**

- 主题标签（从实验室定的 3–6 个里选，可多选）：
- 方法 / approach 标签（可选）：
- 是否 PI 第一或最后（通讯）作者：

**A4 · 链接**

- 论文页面链接（有 DOI 就不用填）：

---

## B. 组内作者（每人一份）

**B1 · 身份**

- 中文名：
- 英文名（**Given Family**，如 `Wei Zhang`）：
- 论文里的署名（**Surname Initials**，如 `Zhang W`）：
- 状态：current / alumni
- 分组：Faculty / Researchers / Staff / Students / Affiliates / Alumni
- 角色（显示在名字下面，如 `PhD Student`、`Postdoc`、`Research Assistant`）：
- 头衔（可选，如 `Assistant Professor`）：
- 在组时间（如 `2023.09–`）：
- 组内排序（同组里第几个，数字）：

**B2 · 联系方式与主页**

- 邮箱：
- 个人主页：
- Google Scholar：
- ORCID：
- LinkedIn：
- X / Twitter：

**B3 · 展示内容**

- 研究方向一句话：
- 个人简介 2–4 句（和网站语言一致）：
- 头像照片（文件名 / 原图；约 600px 方形，头肩照）：

**B4 · 仅 PI**

- 是否 PI：
- Google Scholar 作者 ID（主页 URL 里 `user=` 后面那串）：

---

## C. 填好的例子

下面是一个**虚构**的例子，用来对齐格式。真实信息替换即可。

### C1 · 论文表

> 标题：Sleep-dependent consolidation of perceptual learning in human visual cortex
> 年份：2025
> 期刊：Example Journal of Neuroscience
> DOI：10.0000/example.2025.001
> PMID：00000000
> PMCID：PMC0000000
> 类型：研究论文
> 开放获取：是
> 第一作者：Zhang W
> 通讯作者：Doe J
> 共同一作/共同通讯：无
> 作者（按顺序）：Zhang W, Li X, Roe J, Doe J
> 组内作者：Zhang W（第 1 位）、Doe J（第 4 位 / 通讯）
> 主题标签：topic-one
> 方法标签：methods
> PI 第一或最后作者：是

### C2 · 作者表（张伟）

> 中文名：张伟
> 英文名：Wei Zhang
> 论文署名：Zhang W
> 状态：current
> 分组：Students
> 角色：PhD Student
> 头衔：—
> 在组时间：2023.09–
> 组内排序：3
> 邮箱：wei.zhang@example.edu
> ORCID：https://orcid.org/0000-0002-1825-0097
> Google Scholar：（暂缺）
> LinkedIn：（暂缺）
> 研究方向：睡眠如何影响成人 perceptual learning 的巩固
> 简介：Wei Zhang is a PhD student in the Example Lab. He studies how sleep
> and attention interact during perceptual learning, using psychophysics and
> EEG. Before joining, he trained in psychology at Example University.
> 头像：`w-zhang.jpg`（待补）

### C3 · 生成的两个文件

**`src/content/publications/zhang-2025-sleep.md`**

```md
---
title: "Sleep-dependent consolidation of perceptual learning in human visual cortex"
authors: ["Zhang W", "Li X", "Roe J", "Doe J"]
year: 2025
journal: "Example Journal of Neuroscience"
doi: "10.0000/example.2025.001"
pmid: "00000000"
pmcid: "PMC0000000"
piFirstOrSenior: true
openAccess: true
areas: ["topic-one", "methods"]
---
```

**`src/content/people/w-zhang.md`**

```md
---
name: "Wei Zhang"
status: current
group: Students
role: "PhD Student"
headshot: ../../assets/people/w-zhang.jpg
links:
  email: wei.zhang@example.edu
  orcid: https://orcid.org/0000-0002-1825-0097
order: 3
---

Wei Zhang is a PhD student in the Example Lab. He studies how sleep and
attention interact during perceptual learning, using psychophysics and EEG.
Before joining, he trained in psychology at Example University.
```

> ⚠️ `headshot` 指向的图片必须真实存在，否则 build 会报错。照片还没到位时，先把
> `headshot:` 这一行删掉，之后再补。

### C4 · 加进去之后，网站上会发生什么

- `/publications` 里这篇论文的 **Zhang W 变成加粗链接**，下面出现他的头像和名字；`Doe J` 同理。
- `Li X`、`Roe J` 不在人物库，保持普通文本——**这是正常的**，外部合作者不需要建人物页。
- 论文出现 `Mentee-led`、`PI first/senior`、`Open access` 徽章（因为第一作者是组内学生、最后作者是 PI、有 PMCID）。
- 点开 `/people/w-zhang`，`Selected publications` 里出现这篇。
- 首页 `Recent work` 里出现这篇（mentee 一作，优先展示）。
- 可以在 `/publications` 按 `topic-one`、`methods` 筛选，也可以按 “Mentee-led” 筛。

---

## D. 三个最容易错的地方

1. **英文名顺序。** 人物条目写 `Wei Zhang`（Given Family），论文署名写 `Zhang W`（Surname Initials）。写成 `Zhang Wei` 会匹配不上。
2. **作者顺序。** 按期刊页面原样抄，不要按“贡献大小”重排；共同一作靠 `*` 标注，不靠调顺序。
3. **DOI。** 只留 `10.xxxx/...`。带 `https://doi.org/` 前缀会导致链接拼错。
