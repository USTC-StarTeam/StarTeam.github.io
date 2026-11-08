# 实验室主页 · 信息收集清单

> 配套：`CLAUDE.md`（怎么改这个站）、`docs/intake-form.zh.md`（可以直接转发给组员填的表）。
>
> 建议路径：**先用一篇论文 + 这篇论文的组内作者跑通**，确认字段和格式没问题，再批量补齐。
> 一篇文章的完整例子见 `docs/intake-form.zh.md` 的 C 部分。

## 内容最终落在哪

| 模块 | 文件 | 出现在 |
| --- | --- | --- |
| 站点身份 | `src/data/site.ts` | 全站页眉、页脚、联系页、SEO |
| 人物 | `src/content/people/<slug>.md` | `/people`、`/people/<slug>` |
| 论文 | `src/content/publications/<slug>.md` | `/publications`、首页精选、人物页 |
| 图 | `src/content/figures/<slug>.md` | `/figures`、首页 |
| 实验室照片 | `src/content/gallery/<slug>.md` | `/lab-life` |

---

## 0. 先拍板 4 件事（不定下来，后面会返工）

1. **网站语言。** 模板界面是纯英文（导航、按钮、页脚、筛选器）。内容可以写中文，但界面仍是英文；要中文界面或中英双语，需要额外开发。→ 决定简介、图注、新闻用什么语言写。
2. **名称。** 实验室英文全称、简称、PI 英文名 + 学位（如 `Jane Doe, PhD`）。
3. **研究方向。** 3–6 个英文短标签（slug），外加 1–2 个方法/approach 标签。这是全站标签体系的根：论文、Research 页、首页卡片都挂它，**后改要动好几个文件**。
4. **上线地址。** `https://<org>.github.io/<repo>/` 还是自有域名。

---

## 1. 站点身份 → `src/data/site.ts`

| 字段 | 收什么 | 示例 |
| --- | --- | --- |
| `name` | 实验室英文全称 | `Example Laboratory` |
| `shortName` | 简称，页眉/页脚用 | `Example Lab` |
| `pi` | PI 姓名 + 学位 | `Jane Doe, PhD` |
| `institution` | 研究所 / 系 / 中心 | `Department of Neuroscience` |
| `university` | 学校 | `Example University` |
| `url` | 生产环境地址（canonical + sitemap） | `https://lab.example.edu` |
| `description` | 1–2 句：研究什么、为什么重要 | 首页导语 + 默认 meta description |
| `email` | 课题组公共邮箱 | `lab@example.edu` |
| `phone` | 办公电话 | 联系页总会显示，没有就填课题组座机 |
| `address` | 地址，字符串数组，4 行左右 | `["Example Lab", "Dept.", "123 University Way", "City, ST 00000"]` |
| `mapQuery` | 地图搜索串（和地址一致即可） | `123 University Way, City, ST 00000` |
| `social.scholar` | PI 的 Google Scholar 主页 | `https://scholar.google.com/citations?user=...` |
| `social.twitter` / `social.github` | 有就填，没有删掉 | — |

两个小坑：

- 联系页的地图是 **Google Maps 嵌入**，国内网络可能加载不出来。后面可以换成高德/百度链接或静态图。
- 联系页开头那句 “…research participants' families” 是模板里的临床实验室文案，必须按你们实际情况改。

---

## 2. 人物 → `src/content/people/<slug>.md`

### 2.1 收什么

| 字段 | 收什么 | 必填 | 备注 |
| --- | --- | --- | --- |
| `name` | 展示名，**西式顺序** `Wei Zhang`；PI 可带学位 `Jane Doe, PhD` | ✅ | 决定论文作者能否匹配到人 |
| 文件名（slug） | `w-zhang`（名首字母-姓） | ✅ | 就是个人主页 URL：`/people/w-zhang` |
| `status` | `current` / `alumni` | ✅ | — |
| `group` | `Faculty` / `Researchers` / `Staff` / `Students` / `Affiliates` / `Alumni` | ✅ | 决定分在哪一栏 |
| `role` | 显示在名字下面的一行，如 `Principal Investigator`、`PhD Student` | ✅ | 自由文本 |
| `title` | 次要一行，如 `Assistant Professor`、`Associate Professor` | 可选 | — |
| `headshot` | `../../assets/people/w-zhang.jpg` | 建议 | 约 600px 方形 |
| `links.email` | 邮箱 | 建议 | — |
| `links.scholar` | Google Scholar 主页 | 建议 | 完整 URL |
| `links.orcid` | ORCID iD 页面 | 建议 | 可从论文元数据里查，最可靠 |
| `links.linkedin` / `website` / `twitter` | 完整 URL | 可选 | 拿不准就别填，错链接比没有更糟 |
| `order` | 组内排序数字，小的在前 | 建议 | 用于同组排序 |
| 正文（Markdown） | 2–4 句简介：研究兴趣、训练背景 | 建议 | 会渲染在个人页 |

`featured` 字段目前页面没用到，不用纠结。

### 2.2 命名规则（最容易返工的地方）

- 人物 `name` 一定用**西式顺序**：`Wei Zhang`，**不要** `Zhang Wei`。系统把名字的**最后一个词**当姓；写成中式顺序会导致论文匹配不上、个人页不出现论文。
- 论文里的作者串用 **`姓 名首字母`**：`Zhang W`、`Ortega-Marquez J`。网站靠“姓 + 首字母”把作者连到人物页；写全名也能匹配，但不稳，统一 CV 格式最保险。
- 同姓且首字母相同（如 Zhang Wei / Zhang Wen）目前无法区分，会连到同一个人。遇到这种情况告诉维护的人，需要额外消歧（全名或 ORCID）。
- 改 slug 时，头像文件名和 `headshot:` 路径要一起改；如果论文/图的 slug 里带了这个姓，也要一起改。

### 2.3 头像

- 约 **600px 方形**，头肩照，脸在上 1/3，留一点头顶空间。
- 放 `src/assets/people/<slug>.jpg`，frontmatter 写相对路径 `../../assets/people/<slug>.jpg`。
- 写了 `headshot:` 就必须有对应文件，否则 build 会报错；照片没到齐时先删掉这一行。
- 原图不方也没关系，可以统一裁。

### 2.4 每个人还要额外确认两件事

- **谁是 PI？** PI 的 slug 要写进 `src/lib/content.ts` 的 `NON_MENTEE_SLUGS`，否则 PI 会被当成学生，论文徽章和首页精选都会算错。
- **谁是学生/博后（mentee）？** “Mentee-led” 徽章不是手填的，而是看**第一作者能否匹配到人物条目、且不是 PI**。所以人物库要先有这个人。

> ⚠️ 模板里 `src/components/PubList.astro` 第 83 行把 PI 的 slug 写死成 `jane-doe`（用来判断 “Collaboration” 徽章）。换 PI 时这里也要改，或者让维护的人把它改成配置项。

---

## 3. 论文 → `src/content/publications/<slug>.md`

### 3.1 收什么

| 字段 | 收什么 | 必填 | 备注 |
| --- | --- | --- | --- |
| `title` | 论文原题（照期刊页） | ✅ | 含冒号等符号要加引号 |
| `authors` | **完整作者列表，按署名顺序**，每项 `姓 名首字母` | ✅ | 外部合作者也要列，但不用建人物页 |
| `year` | 出版年份，数字 | ✅ | — |
| `journal` | 期刊/会议全称 | 建议 | 斜体显示 |
| `doi` | 只要 `10.xxxx/...` | 建议 | 不要带 `https://doi.org/` 前缀，站点会自己拼 |
| `pmid` | PubMed ID，字符串 | 可选 | — |
| `pmcid` | PMC ID，如 `PMC1234567` | 可选 | 有就说明开放获取 |
| `url` | 无 DOI 时的替代链接 | 可选 | 有 DOI 就不用填 |
| `openAccess` | 是否可免费读全文 | 建议 | 有 PMCID 一般就是 `true`，控制 “Open access” 徽章和筛选 |
| `piFirstOrSenior` | PI 是否第一/最后（通讯）作者 | 建议 | 控制徽章和首页精选；共同一作/共同通讯也算 |
| `areas` | 主题标签，从已定的 enum 里选，可多个 | 建议 | 写错会直接 build 失败 |
| `citations` / `scholarUrl` | 引用数 / Scholar 链接 | 可留空 | 开了每周 Action 会自动写入 |
| `isMenteePaper` / `menteeFirstAuthor` / `featured` | — | 不用管 | 目前不参与页面展示 |

slug 约定：`<第一作者姓>-<年份>-<关键词>`，如 `zhang-2025-sleep`。图的 `paper:` 引用的是这个 slug。

### 3.2 共同一作 / 共同通讯怎么记

论文列表里的 `*`（co-first / co-senior）不是写在 md 里的，而是从 `scripts/data/cv-publications.json`（按 DOI 匹配）或 `scripts/data/author-overrides.json` 读的：

```json
{
  "10.0000/example.2025.001": { "coFirstSenior": ["Zhang W", "Li X"] }
}
```

只需要给需要打星的名字；不填就没有星号。

### 3.3 批量录入（论文多了以后）

1. 从 CV / Google Scholar / PubMed 整理成 `scripts/data/cv-publications.json`：
   `[{title, authors:[{name, mentee, coFirstSenior}], journal, year, doi, pmid, pmcid}]`
2. 设置 `PI_SURNAME`，运行 `node scripts/migrate-publications.mjs`。
3. 脚本按 DOI / 标题去重，**只增不改**，不会覆盖已经写好的引用数和手改内容。

---

## 4. 图 → `src/content/figures/<slug>.md`（有版权门）

| 字段 | 收什么 | 必填 |
| --- | --- | --- |
| `image` | 图片路径，放 `src/assets/figures/` | ✅ |
| `paper` | 所属论文的 slug | ✅ |
| `caption` | 图注，建议以 `Figure 1` 开头（会自动按图号排序） | ✅ |
| `citation` | 出处，如 `Zhang W et al. Journal (2025).` | ✅ |
| `license` | `CC-BY` / `CC-BY-SA` / `CC0` / `publisher-permission` / `unknown` | ✅ |
| `rightsConfirmed` | 你是否确认拥有转载权 | ✅ |
| `doi` / `pmid` / `journal` / `licenseUrl` / `order` | 补充信息 | 可选 |

**`rightsConfirmed` 默认 `false`，为 false 的图永远不会显示。** 只放三类图：开放获取（CC）、出版社已许可、你们自己做的。拿不准就先去问出版社/通信作者，不要先开开关。

---

## 5. 实验室照片 → `src/content/gallery/<slug>.md`

| 字段 | 收什么 | 必填 |
| --- | --- | --- |
| `image` | 图片路径，放 `src/assets/gallery/` | ✅ |
| `caption` | 一句话说明（时间、地点、事由） | ✅ |
| `date` | 日期，`2025-09-01` | ✅ |
| `people` | 出镜人姓名数组 | 可选（目前未展示） |
| `featured` | — | 不用管 |

注意：发照片前确认出镜同学同意公开；合影尤其要问一声。

---

## 6. Logo 和视觉

- **favicon**：`public/favicon.svg`（现在是占位图）+ 由它生成的 `.ico` / PNG 图标集。
- **主色**：现在是一套蓝绿色；要换的话给一个色值即可。
- **首页 hero**：默认是文字版；也可以做一张领域相关的插画（可选，工作量大）。

---

## 7. 上线要用的信息（不是网页内容，但得有人去要）

- GitHub 组织 / 仓库地址（以及谁有 admin 权限）。
- 域名 + DNS 管理权限（如果用自有域名）。
- PI 的 Google Scholar 作者 ID（主页 URL 里 `user=` 后面那串）。
- SerpAPI key（可选，用来自动更新引用数）。

---

## 8. 分工建议：向谁要什么

| 找谁 | 要什么 |
| --- | --- |
| PI | 实验室名称/简称、一句话使命、研究方向及说明、PI 本人档案、Scholar ID、域名 |
| 每位组员 | 英文名、身份/年级、角色、2–4 句简介、头像、邮箱、ORCID/Scholar/LinkedIn/个人主页 |
| 管论文的人 / 第一作者 | 标题、期刊、年份、DOI、PMID/PMCID、**完整作者顺序**、共同一作/通讯、是否开放获取 |
| 图的第一作者 | 图文件、图注、版权许可类型 |
| 全组 | 活动照片 + 出镜同意 |

找元数据最快的顺序：**期刊页面 → PubMed → Crossref → PI 的 CV / ORCID**。作者顺序以期刊页面为准，不要凭记忆。

---

## 9. 先做这一个例子（约 30–40 分钟）

挑一篇 **PI 通讯 + 组内学生一作** 的论文，因为它能同时验证作者匹配、mentee 徽章、PI 徽章和首页精选。

1. 填 `docs/intake-form.zh.md` 的 A 部分（论文）——10 分钟。
2. 给这篇论文里的**每位组内作者**填 B 部分（人物）——每人 5 分钟；外部合作者不用填。
3. 让维护的人（或 Claude）生成 1 个论文 md + N 个人物 md，跑 `npm run build` 和 `npm run dev`。
4. 对照检查：
   - 论文页里组内作者是否变成**加粗链接**、下面是否出现头像；
   - 是否出现 `Mentee-led` / `PI first/senior` / `Open access` 徽章；
   - 点进个人页，`Selected publications` 是否列出这篇；
   - 首页 `Recent work` 是否出现。
5. 四项都对 → 这套格式就定了，剩下的论文和人物照此批量填。

---

## 10. 常见返工点

- 人名写成 `Zhang Wei`（中式顺序）→ 论文匹配不上。
- 作者串格式不统一（`Wei Zhang` / `Zhang, W.` / `W. Zhang` 混用）→ 建议统一 `Zhang W`。
- DOI 写成 `https://doi.org/10.xxxx/...` → 只留 `10.xxxx/...`。
- `areas` 用了没定义的标签 → build 直接报错。
- 头像不是方形 / 分辨率太低。
- 图没确认版权就打开 `rightsConfirmed`。
- PI 没加进 `NON_MENTEE_SLUGS`，或者没改 `PubList.astro` 里写死的 `jane-doe`。
- 同姓同首字母的两个人 → 作者会连错人。
