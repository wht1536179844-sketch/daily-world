/* 每日早报数据存档：最新一期在最前面。
   每天由本机 Codex 定时任务自动抓取后，往数组开头插入一期。
   板块顺序：AI 前沿（重点）→ 中国 → 美国·国际 → 财经 → 昨日最热（知乎/B站/抖音榜首）
   格式说明见 每日播报_操作规程.md。人物志由 人物志故事库.js 按日轮换，不在本文件。 */
const DAILY_ARCHIVE = [
  {
    date: "2026-07-28",
    weekday: "周二",
    lead: {
      title: "Kimi K3 开源，把中美开放权重之争推到台前",
      link: "https://36kr.com/newsflashes/3914648643277958?f=rss",
      body: "月之暗面在7月27日晚发布 Kimi K3 模型权重、技术报告，并同步开源 MoonEP、FlashKDA、AgentEnv 等训练基础设施。36氪快讯披露，Kimi K3 是 2.8 万亿参数 MoE 模型，具备原生视觉理解能力，支持 100 万 token 上下文，官方称可自由下载、部署并嵌入终端产品。\n背景是，中国开放权重模型正持续冲击美国闭源 API 模式。The Verge 同日把 Kimi K3 称为让 OpenAI、Google、Anthropic 重新思考“哪些能力该锁起来”的代表案例；TechCrunch 则报道，Anthropic CEO Dario Amodei 公开澄清公司从未主张禁止开放权重模型，但担心更强模型被威权政府用于军事或生物风险。\n细节上，Kimi K3 不只放权重，还放训练 Infra，这会降低企业自部署门槛。对国内开发者来说，100 万 token 长上下文、视觉能力和 MoE 架构组合，比单纯跑分更关键，因为它直接关系到代码库理解、文档处理和多模态 Agent 的本地化落地。",
      why: "对关注 AI 的中国读者来说，Kimi K3 开源意味着国产前沿模型正在从“可调用”走向“可部署、可改造”，也会加速企业重新评估闭源 API 依赖。",
      sources: [
        { name: "36氪", link: "https://36kr.com/newsflashes/3914648643277958?f=rss" },
        { name: "The Verge", link: "https://www.theverge.com/ai-artificial-intelligence/971444/how-chinese-open-weight-ai-models-impact-us-companies" },
        { name: "TechCrunch", link: "https://techcrunch.com/2026/07/27/anthropics-dario-amodei-responds-doesnt-oppose-open-weight-models-but-fears-chinese-ai/" }
      ]
    },
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "微软发布首个网络安全专用模型", s: "TechCrunch 7月27日报道，微软推出 MAI-Cyber-1-Flash 与 Perception 平台；Mustafa Suleyman 称模型绑定 GPT-5.4 后在 Cyber Gym 基准超过 Gemini、GPT-5.5 Cyber 等竞品，并将立即进生产。", w: "AI 安全开始进入模型、平台和红蓝队协作一体化竞争。", link: "https://techcrunch.com/2026/07/27/microsoft-launches-its-first-cyber-model-and-a-new-agentic-cybersecurity-system/" },
          { t: "SSI 获英伟达数十亿美元算力支持", s: "TechCrunch 7月27日报道，Ilya Sutskever 创办的 Safe Superintelligence 与 Nvidia 达成长线合作，将接入 Vera Rubin GPU 平台，算力资源预计提升一个数量级；彭博称交易规模约 50 亿美元。", w: "超级智能安全路线也在加速堆算力，闭门研究进入扩张期。", link: "https://techcrunch.com/2026/07/27/ilya-sutskevers-safe-superintelligence-partners-with-nvidia-to-scale-its-ai-research/" },
          { t: "蚂蚁百灵发布 Ling-3.0-Flash", s: "量子位7月27日报道，Ling-3.0-Flash 总参数 124B、单次激活 5.1B，采用 5:1 混合注意力层设计；长输入首字延迟降低 60% 至 80%，并扩展超 10000 个真实交互训练环境。", w: "国产模型竞争从参数规模转向推理效率和 Agent 稳定性。", link: "https://www.qbitai.com/2026/07/461149.html" },
          { t: "纳德拉提醒企业别把思考外包给单一 AI", s: "TechCrunch 7月27日报道，Satya Nadella 在 CNN 节目中称，企业应保留模型使用元数据、提示词和上下文记忆；他警告，完全依赖一家 AI 实验室的公司可能无法长期生存。", w: "多模型网关和企业自有上下文会成为下一轮基础设施。", link: "https://techcrunch.com/2026/07/27/satya-nadella-says-companies-that-trust-one-ai-for-everything-may-not-survive/" },
          { t: "Claude 共享聊天曾被 Google 索引", s: "TechCrunch 7月27日报道，部分 Claude shared chats 与 Artifacts 页面可能出现在 Google 搜索结果中；事件再次提醒用户，公开分享链接不等于私密空间，含代码、客户资料的 1 条链接也可能外泄。", w: "AI 产品的分享默认值，正在变成真实的数据安全风险。", link: "https://techcrunch.com/2026/07/27/psa-your-claude-shared-chats-and-artifacts-may-have-ended-up-on-google/" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "中国女童基因编辑治疗后死亡引调查", s: "BBC中文7月27日报道，一名6岁女童2025年3月24日在上海接受 CHD3 基因突变碱基编辑治疗后一周内死亡；家属曾为个性化疗法提供约 86 万美元资金，上海交大医学院已成立专项工作组。", link: "https://www.bbc.com/zhongwen/articles/cjrv7vp8p53o/trad?at_medium=RSS&at_campaign=rss" },
          { t: "美团 AI 助手“小团”升级代理执行能力", s: "美团7月27日宣布本地生活 AI 助手“小团”升级至2.0，可协助下单、打车、订位等操作；其信息服务覆盖全国 2800 多个城市，累计完成超 7 亿次商家信息校验。", link: "https://www.meituan.com/news/NN260727198008607" },
          { t: "瑞幸泰国商标案二审胜诉", s: "证券日报7月27日报道，泰国专门案件上诉法院维持瑞幸咖啡胜诉，判令被告撤销抢注商标并停止相关标识使用；赔偿总额逾 9500 万泰铢，约合 300 万美元。", link: "https://finance.eastmoney.com/a/202607273822065742.html" },
          { t: "中国氢能航空创业公司完成天使+轮融资", s: "36氪7月27日报道，易氢动力完成数千万元天使+轮融资，团队源自清华，产品从 30kW 液冷燃料电池迭代至 90-110kW；其空冷方案在2026年目标做到数千万元营收。", link: "https://36kr.com/p/3913736066028932?f=rss" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "印度 Z 世代抗议迫使教育部长下台", s: "BBC中文7月28日报道，印度 NEET 试题泄露事件引发青年抗议，教育部长普拉丹辞职；官方数据显示，15至29岁人口失业率由一年前 13.8% 升至6月的 16.2%。", link: "https://www.bbc.com/zhongwen/articles/c0ejq8n30qxo/trad?at_medium=RSS&at_campaign=rss" },
          { t: "所罗门群岛中资金矿坍塌传10人死亡", s: "BBC中文7月27日报道，金岭矿场7月27日凌晨发生坍塌，当地媒体称已发现 10 具遗体，但万国黄金集团否认伤亡；该金矿去年贡献所罗门群岛近四分之一 GDP。", link: "https://www.bbc.com/zhongwen/articles/cn0n57kynz2o/trad?at_medium=RSS&at_campaign=rss" },
          { t: "美国 T-Mobile 大范围服务中断", s: "WFAA 7月27日报道，美国多地 T-Mobile 用户出现手机进入 SOS 模式等故障；Downdetector 数据显示，截至美东下午5点，故障报告一度超过 62000 起，运营商在 X 上回应用户。", link: "https://www.wfaa.com/article/news/nation-world/t-mobile-users-outage-latest-updates/507-f6be3924-a4ec-4b38-a90f-67e64fa3dccc" },
          { t: "Fauci 新冠时期日记引发美国政治争论", s: "The Guardian 7月27日报道，参议员 Rand Paul 公开 Anthony Fauci 日记摘录，内容涉及其对特朗普政府疫情应对的不满；媒体称相关材料跨 2019 至 2022 年，Fauci 将赴参议院作证。", link: "https://www.theguardian.com/us-news/2026/jul/27/anthony-fauci-trump-covid-journal" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "长鑫科技上市带动蔚来账面浮盈超7亿", s: "ZAKER 7月28日报道，长鑫科技7月27日登陆科创板，收盘报 49 元、涨幅 465.82%、总市值超 3.3 万亿元；蔚来战略配售 1.58 亿元，按收盘价浮盈约 7.4 亿元。", link: "https://www.myzaker.com/article/6a66d5d4b15ec01fca1effc9" },
          { t: "苹果重返全球市值第一", s: "MarketWatch 7月27日报道，苹果股价涨约 1% 至 336.91 美元，市值达 4.93 万亿美元；英伟达下跌约 5% 后市值约 4.78 万亿美元，苹果重新成为全球市值第一。", link: "https://www.marketwatch.com/story/apple-reclaims-title-of-worlds-largest-company-after-historic-stretch-of-outperformance-92920ab6" },
          { t: "疯投圈新一期拆解“蔚小理”高端化", s: "疯投圈7月27日上线第143期，围绕蔚来、小鹏、理想在价格战和舆论战中的高端化尝试展开；节目把汽车视为普通家庭除房产外最大额的单笔消费来观察品牌竞争。", link: "https://crazy.capital/143" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】王虹、邓煜成长经历与顶尖科研土壤", s: "知乎热榜第1，抓取时约1258万热度；网友围绕王虹1991年出生、邓煜1989年出生及二人学术路径，讨论“金子在哪都会发光”是否忽视教育资源和导师环境。", link: "https://www.zhihu.com/question/2064337609879507952" },
          { t: "【第2】美国校园午餐“科技狠活”争议", s: "知乎热榜第2，抓取时约1118万热度；话题源于7月24日报道的视频，网友争论黏稠牛奶、可被磁铁吸起的胡萝卜是否说明食品加工、储存或拍摄误导问题。", link: "https://www.zhihu.com/question/2065066881015177978" },
          { t: "【第3】湖南被安徽反超后怎么发展", s: "知乎热榜第3，抓取时约547万热度；讨论集中在湖南跌出全国前十、江西追近陕西的区域竞争，网友比较产业结构、制造业链条和省会虹吸效应。", link: "https://www.zhihu.com/question/2064849542147748410" },
          { t: "【第4】如何评价 Kimi K3 正式开源", s: "知乎热榜第4，抓取时约387万热度；网友关注 2.8 万亿参数、100万 token 上下文、MoonEP/FlashKDA/AgentEnv 开源，对比闭源模型和国产生态机会。", link: "https://www.zhihu.com/question/2065214142915654338" },
          { t: "【第5】樊哙生吃彘肩为何没感染", s: "知乎热榜第5，抓取时约304万热度；讨论从《史记》文本真实性、古代“生吃”是否真生、猪肉寄生虫风险，到现代食品安全常识延伸。", link: "https://www.zhihu.com/question/267314352" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】极客湾手机续航大横评", s: "UP主极客湾Geekerwan，抓取时播放约263.6万、点赞约38.1万；视频自购78台零售手机，用 AI Agent 5.0 标准测试续航、电池锁容和充电降速。", link: "https://b23.tv/BV1LR336sEFX" },
          { t: "【第2】奇怪的玩具工厂第五章 Part1", s: "UP主鲤鱼Ace，抓取时播放约315.2万、点赞约44.6万；视频为游戏实况内容，简介多次提醒不要相信仿冒账号或 AI 生成求助信息。", link: "https://b23.tv/BV1dz356wEgr" },
          { t: "【第3】明日方舟 EP《酸橙色信笺》", s: "UP主明日方舟，抓取时播放约184.1万、点赞约18.7万；EP预告7月28日18点上架各音乐平台，粉丝围绕安洁莉娜夏日影像互动。", link: "https://b23.tv/BV1nB3u6tEHD" },
          { t: "【第4】朱志鑫原创 SOLO 十机位直拍", s: "UP主帆_朱志鑫，抓取时播放约38.5万、点赞约7.3万；视频来自“登陆少年梦寐以求演唱会”，主打 DAY-1 原创 SOLO《Do All Swag》4K直拍。", link: "https://b23.tv/BV12v336MEVJ" },
          { t: "【第5】苏新皓《囍》solo直拍", s: "UP主Renaissance苏新皓，抓取时播放约35.0万、点赞约6.4万；视频来自梦寐以求青岛演唱会，粉丝讨论舞台编排、国风曲目和个人表现。", link: "https://b23.tv/BV15Q3u6UEfW" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "【第1】合肥国资持股长鑫市值超1万亿", s: "抖音热榜第1，抓取时间2026-07-28 09:54，热度约1134.6万；网友把长鑫科技上市、合肥国资投资回报和国产存储产业链放在一起讨论。", link: "" },
          { t: "【第2】“红霞”停止编号", s: "抖音热榜第2，抓取时间2026-07-28 09:54，热度约1132.2万；话题围绕台风“红霞”减弱停编后的降雨、转移安置和沿海复工复产。", link: "" },
          { t: "【第3】数说中国经济新亮点", s: "抖音热榜第3，抓取时间2026-07-28 09:54，热度约1124.8万；短视频集中展示消费、制造业、外贸或新质生产力数据，评论区争论体感与宏观数字差异。", link: "" },
          { t: "【第4】中国男篮90:82再胜喀麦隆", s: "抖音热榜第4，抓取时间2026-07-28 09:54，热度约1112.2万；焦点是中国男篮以90:82再次击败喀麦隆，网友讨论热身赛含金量和后卫线表现。", link: "" },
          { t: "【第5】这次出发不是找你是去找自由", s: "抖音热榜第5，抓取时间2026-07-28 09:54，热度约1056.1万；该话题偏情绪表达和旅行/分手文案，网友用短视频二创表达离开关系后的自由感。", link: "" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】#WWERaw", s: "美国 X 趋势第1；7月27日 WWE Raw 在洛杉矶 Intuit Dome 播出，是 SummerSlam 前最后一期节目，Oba Femi、Brock Lesnar、Joe Hendry 等桥段带动讨论。", link: "https://www.cagesideseats.com/wwe/463706/wwe-raw-results-live-discussion-july-27-2026-concerthausen" },
          { t: "【第2】Fauci", s: "美国 X 趋势第2；Anthony Fauci 新冠时期日记被公开后引发政治争议，媒体称材料覆盖2019至2022年，他还将面对参议院相关听证。", link: "https://www.wsj.com/politics/policy/key-takeaways-from-anthony-faucis-covid-era-journals-078787d4" },
          { t: "【第3】T-Mobile", s: "美国 X 趋势第3；7月27日 T-Mobile 大范围中断，Downdetector 报告一度超过62000起，用户在 X 上集中反馈手机进入 SOS 模式。", link: "https://www.houstonchronicle.com/news/houston-texas/trending/article/t-mobile-outage-today-thursday-22362513.php" },
          { t: "【第4】Vita Vea", s: "美国 X 趋势第4；多家体育媒体称31岁的 Buccaneers 防守截锋 Vita Vea 因续约谈判停滞申请交易，他正处在4年7100万美元合同最后一年。", link: "https://www.bucsnation.com/tampa-bay-buccaneers-news/68014/reports-vita-vea-requests-trade-out-of-tampa-bay" },
          { t: "【第5】X Money", s: "美国 X 趋势第5；话题与 X 平台金融服务、支付和高收益账户讨论有关，getdaytrends 当天同时列出“6% APY”等相关词，网友关注产品何时正式开放。", link: "https://getdaytrends.com/united-states/" }
        ]
      }
    ],
    podcasts: [
      { show: "硅谷101", title: "E245｜藏在大模型背后的新闻人：GPT们的回复是这样写出来的", note: "本期聚焦大模型回答背后的新闻生产、资料筛选和内容编辑机制，适合关心 AI 与媒体关系的听众。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/5aeaeb64-9165-4271-9884-23329b511e11.mp3", link: "https://sv101.fireside.fm/258" },
      { show: "What's Next｜科技早知道", title: "国产 AI 算力能凭「超节点」弯道超车吗? | WAIC 深度观察 S10E23", note: "节目围绕 WAIC 观察国产 AI 算力、超节点方案和产业链突破，适合补充理解本周 AI 基建讨论。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/a6c6ab3e-72b2-470b-aefd-04b19679d37f.mp3", link: "https://guiguzaozhidao.fireside.fm/20240437" },
      { show: "疯投圈", title: "143 ✪ 🚗「蔚小理」的高端探索", note: "本期从商业分析和消费品牌角度观察蔚来、小鹏、理想，讨论价格战中的高端化路径。", audio: "https://rio.xyzcdn.net/crazycapital/ep143.mp3", link: "https://crazy.capital/143" }
    ]
  },
  {
    date: "2026-07-27",
    weekday: "周一",
    lead: {
      title: "新智具身与复旦把“触觉”推到具身智能主战场",
      link: "https://www.qbitai.com/2026/07/460962.html",
      body: "新智具身 NeoteAI 与复旦大学可信具身智能研究院在7月26日连发 N0-Foundation、N0-VTLA、N0-TWAM 三份报告，核心不是再堆视觉模型，而是把触觉数据做成机器人训练底座。量子位报道提到，NeoData 包含超3万小时视觉-触觉交互数据、约140万条操作片段、33亿个时间步、80亿帧 RGB 画面和100亿帧触觉图像，覆盖6种机器人本体、450项真实长程任务，并已开源5000小时数据。\n背景是，过去一年具身智能的争论多集中在 VLA、世界模型和大模型规划，但真实操作里的失败常发生在“最后一厘米”：插头是否卡住、瓶身是否被夹瘪、毛巾松手会不会散开，这些信息摄像头很难稳定看见。N0-VTLA 选择预测未来50步触觉演变，在插插头任务上成功率85%，对比视觉方案60%；拔钥匙任务99%，对比视觉方案35%。这说明触觉不只是补充传感器，而可能改变策略学习方式。\n最值得注意的是 N0-TWAM 把未来视频、未来触觉和动作放进同一个世界-动作模型里，采用混合专家架构，总参数量72亿，约为全宽方案一半；其仿真平均成功率84.5%，真机8项任务平均成功率46.3%。同期 VT-WAM、Dream-Tac 等论文也在做触觉世界模型，说明机器人路线正在从“看懂世界”转向“看见、摸到并提前想象接触后果”。",
      why: "对关注AI的中国读者来说，这条新闻说明具身智能的差距可能不只在模型参数，而在触觉数据、真机任务和失败样本闭环。",
      sources: [
        { name: "量子位", link: "https://www.qbitai.com/2026/07/460962.html" },
        { name: "NeoteAI N0-VTLA", link: "https://research.neoteai.com/n0-vtla/" },
        { name: "NeoteAI N0-TWAM", link: "https://research.neoteai.com/n0-twam/" },
        { name: "N0-Foundation 报告", link: "https://research.neoteai.com/assets/n0-foundation-report.pdf" }
      ]
    },
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "Encord试验用脑电补机器人训练数据", s: "TechCrunch 7月26日报道，Encord在加州仓库让训练员戴脑电头显完成Jenga等操作，目标是把意图、错误和惊讶等脑波状态标注进机器人数据；合作方Zander Labs仍处试验阶段。", w: "物理AI瓶颈转向数据质量，脑电标注是新变量。", link: "https://techcrunch.com/2026/07/26/are-brain-waves-the-next-unlock-for-physical-ai/" },
          { t: "Kimi热度再引美国AI开放争论", s: "TechCrunch 7月26日称，月之暗面 Kimi 新模型让华盛顿重新争论中国开源模型；播客讨论把它与DeepSeek热潮对比，焦点是限制中国模型会保护安全还是只利好少数前沿实验室。", w: "中国模型被美国政策圈反复讨论，开源路线影响外溢。", link: "https://techcrunch.com/2026/07/26/making-sense-of-the-panic-over-chinese-ai/" },
          { t: "Hugging Face要求OpenAI公开“失控Agent”轨迹", s: "TechCrunch 7月26日报道，Hugging Face CEO Clem Delangue要求OpenAI释放相关Agent运行轨迹，并投入1亿美元算力帮助社区建设网络防御；事件被称为首次自主Agent网络攻击。", w: "Agent安全从理论风险进入可审计事件，透明度会成争点。", link: "https://techcrunch.com/2026/07/26/hugging-face-ceo-calls-for-radical-transparency-after-unprecedented-openai-hack/" },
          { t: "苹果智能眼镜押注隐私差异化", s: "The Verge 7月26日援引Mark Gurman称，苹果计划在明年WWDC展示首款智能眼镜，预计2027年底上市；相比Meta眼镜，苹果正在把隐私功能和提示机制作为关键卖点。", w: "AI硬件竞争不只拼摄像头，隐私体验会影响接受度。", link: "https://www.theverge.com/tech/971101/apple-smart-glasses-privacy" },
          { t: "一小时训练可显著提高AI脸识别率", s: "BBC中文7月26日报道，ANU团队在PNAS研究中让45名成年人接受约1小时训练，AI脸识别准确率从41%提升到81%；德勤估算生成式AI诈骗明年仅美国损失可达400亿美元。", w: "AI内容鉴别正在变成普通用户的基础安全能力。", link: "https://www.bbc.com/zhongwen/articles/cedjl1vvjdyo/trad?at_medium=RSS&at_campaign=rss" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "“数字空间一号”试验星工程启动", s: "36氪7月27日报道，“数字空间一号”试验星工程7月26日在北京启动；低轨300至2000公里空间在50公里安全间距下最多约容纳17.5万颗卫星，项目要验证星上“感知-认知-行为”闭环。", link: "https://36kr.com/p/3912546487637378?f=rss" },
          { t: "携程因垄断行为被罚没51.79亿元", s: "36氪7月27日早报称，市场监管总局7月25日对携程集团滥用市场支配地位作出处罚，罚没款合计51.79亿元；携程公告称接受处罚并将逐项整改。", link: "https://36kr.com/p/3913118530819457?f=rss" },
          { t: "台风“红霞”登陆广东，逾71万人转移", s: "BBC中文7月26日报道，今年第12号台风“红霞”在广东东部沿海登陆，为今年以来登陆中国强度最大的台风；广东截至26日零时累计转移人员逾71.5万人。", link: "https://www.bbc.com/zhongwen/articles/cqx748q7zrwo/trad?at_medium=RSS&at_campaign=rss" },
          { t: "长鑫科技今日科创板上市", s: "36氪7月27日早报称，长鑫科技今日在上交所科创板上市，发行价8.66元/股、发行后总股本668.81亿股；研报给出1万亿至4.25万亿元市值情景。", link: "https://www.cs.com.cn/ssgs/gsxw/202607/t20260727_6493820.html" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "柏林骄傲节袭击嫌疑人被警方击毙", s: "AP 7月26日报道，柏林骄傲节附近车辆冲撞和持刀袭击造成1死29伤；21岁嫌疑人Abdul Ballout在近24小时搜捕后于Spandau与警方交火身亡。", link: "https://apnews.com/article/3ba5e3f1becffd0da5f47b29aa08da9d" },
          { t: "漫威确认Ryan Gosling出演Ghost Rider", s: "AP 7月26日报道，漫威在圣迭戈Comic-Con宣布Ryan Gosling加入MCU出演Ghost Rider，影片计划2028年上映；David Jonsson也确认出演2028年12月15日上映的《Black Panther 3》。", link: "https://apnews.com/article/35f4476d32fdd55acc7bcbe608a8e2d2" },
          { t: "泰国是否配合中国跨境执法引争议", s: "BBC中文7月27日报道，人权组织关注至少4名在泰中国异议人士或媒体人去向；报道提到白兆东59岁、张信燕56岁，并回顾2015年逾100名维吾尔人被送返事件。", link: "https://www.bbc.com/zhongwen/articles/cx2594ne6g7o/trad?at_medium=RSS&at_campaign=rss" },
          { t: "波加查环法总成绩夺冠", s: "AP 7月27日赛果显示，Tadej Pogacar以73小时56分26秒拿下环法总冠军，Remco Evenepoel落后6分26秒列第2，墨西哥车手Isaac del Toro落后9分42秒列第3。", link: "https://apnews.com/article/tour-de-france-general-news-cycling-674c318bb10faf3e81f745e0fdbe3efe" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "特朗普新关税遭小企业起诉", s: "AP 7月26日报道，美国小企业已提起2起诉讼，挑战对60个贸易伙伴征收10%至12.5%新关税；措施以强迫劳动执法为由，覆盖约99%的美国进口。", link: "https://apnews.com/article/fd55d81461c38892a03c322bfcc46e95" },
          { t: "MORROR ART完成亿元级B+轮融资", s: "36氪7月27日报道，家居音频品牌MORROR ART完成亿元级B+轮融资；其海外子品牌MorningBlues的SonicGlass A1在Kickstarter众筹金额已突破120万美元。", link: "https://36kr.com/p/3910655616521348?f=rss" },
          { t: "美股周线收跌，布伦特回落至96.78美元", s: "AP 7月24日数据称，标普500收于7411.98点，道指51947.25点，纳指24975.82点；布伦特原油从102美元附近回落到96.78美元，但四大指数周线均下跌。", link: "https://apnews.com/article/02d01b8f38ccd51f605c4414cdd4fa9b" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】《群星闪耀时》也官宣撤档", s: "知乎热榜第1，抓取时约1372万热度；网友把它与《争洛阳》撤档连在一起讨论，焦点是2026暑期档大片为何连续调整档期和口碑风险。", link: "https://www.zhihu.com/question/2064850023011935595" },
          { t: "【第2】邓煜获2026年菲尔兹奖", s: "知乎热榜第2，抓取时约776万热度；讨论从菲尔兹奖、数学与物理交叉延伸到诺贝尔物理学奖可能性，网友争论基础数学成果如何被物理界认可。", link: "https://www.zhihu.com/question/2064329046528414734" },
          { t: "【第3】为什么说小男孩最难养", s: "知乎热榜第3，抓取时约328万热度；话题围绕儿童安全、性别刻板印象和家庭教育经验展开，原问题把“小男孩行为准则”写成“只要死不了就安全”。", link: "https://www.zhihu.com/question/2057134171752084148" },
          { t: "【第4】罗永浩炮轰智能电视套娃收费", s: "知乎热榜第4，抓取时约292万热度；罗永浩7月25日吐槽“长辈模式”仍难用，网友集中讨论IPTV、开机进直播和电视会员多层收费。", link: "https://www.zhihu.com/question/2064500575325181312" },
          { t: "【第5】24岁女孩正颌手术被做反", s: "知乎热榜第5，抓取时约240万热度；武汉卫健部门已介入，讨论集中在2025年手术是否误诊、过度医疗，以及医院和医生应承担的责任。", link: "https://www.zhihu.com/question/2064692382461685795" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】极客湾手机续航大横评", s: "UP主极客湾Geekerwan，抓取时播放约198.7万、点赞约30.8万；视频自购78台零售手机，用AI Agent 5.0标准测试续航、电池锁容和充电降速。", link: "https://www.bilibili.com/video/BV1LR336sEFX" },
          { t: "【第2】奇怪的玩具工厂第五章Part1", s: "UP主鲤鱼Ace，抓取时播放约207.3万、点赞约33.4万；视频为游戏实况内容，简介多次提醒不要相信仿冒账号或AI生成求助信息。", link: "https://www.bilibili.com/video/BV1dz356wEgr" },
          { t: "【第3】《下一个是谁》第七季第2期", s: "UP主自来卷三木，抓取时播放约296.5万、点赞约32.1万；本季延续抽iPhone17 Pro玩法，第二期主打包下一整座山的户外挑战。", link: "https://www.bilibili.com/video/BV1KRg462E53" },
          { t: "【第4】明日方舟EP《酸橙色信笺》", s: "UP主明日方舟，抓取时播放约160.9万、点赞约16.9万；EP预告7月28日18点上架各音乐平台，粉丝围绕安洁莉娜夏日影像互动。", link: "https://www.bilibili.com/video/BV1nB3u6tEHD" },
          { t: "【第5】泛式讲二次元袜学导论", s: "UP主泛式，抓取时播放约199.6万、点赞约19.4万；视频参加bilibili次元论战S3，用1026秒讨论小腿袜、过膝袜等二次元符号。", link: "https://www.bilibili.com/video/BV1Tdgh6aESA" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "【第1】重庆彭水发现失联中巴车残骸", s: "抖音热榜第1，抓取时热度约1214万；网友关注失联车辆残骸发现位置、搜救进展和山区道路安全，相关短视频多为现场信息汇总。", link: "https://www.douyin.com/search/%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%8F%91%E7%8E%B0%E5%A4%B1%E8%81%94%E4%B8%AD%E5%B7%B4%E8%BD%A6%E6%AE%8B%E9%AA%B8" },
          { t: "【第2】长鑫科技今日上市", s: "抖音热榜第2，抓取时热度约1210万；话题围绕科创板上市、8.66元发行价、半导体国产替代和打新收益预期展开。", link: "https://www.douyin.com/search/%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%BB%8A%E6%97%A5%E4%B8%8A%E5%B8%82" },
          { t: "【第3】红树林保护获亮眼成绩", s: "抖音热榜第3，抓取时热度约1209万；用户主要转发生态保护成果、湿地修复和沿海生物多样性案例，短视频多用航拍画面呈现。", link: "https://www.douyin.com/search/%E7%BA%A2%E6%A0%91%E6%9E%97%E4%BF%9D%E6%8A%A4%E8%8E%B7%E4%BA%AE%E7%9C%BC%E6%88%90%E7%BB%A9" },
          { t: "【第4】夏日复古风通勤穿搭来啦", s: "抖音热榜第4，抓取时热度约1189万；内容以职场穿搭、复古配色和夏季轻薄面料为主，商业种草与普通用户仿拍同时升温。", link: "https://www.douyin.com/search/%E5%A4%8F%E6%97%A5%E5%A4%8D%E5%8F%A4%E9%A3%8E%E9%80%9A%E5%8B%A4%E7%A9%BF%E6%90%AD%E6%9D%A5%E5%95%A6" },
          { t: "【第5】万千气象看青海", s: "抖音热榜第5，抓取时热度约1107万；话题集中在青海自然风光、生态治理和文旅宣传，用户用短视频展示高原湖泊、草原与城市变化。", link: "https://www.douyin.com/search/%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E9%9D%92%E6%B5%B7" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】#AEWRedemption", s: "Trends24美国榜最新第1；AEW 7月26日在蒙特利尔Bell Centre举行Redemption付费赛事，Kenny Omega、Kevin Knight等多场冠军战带动摔角粉丝刷屏。", link: "https://twitter.com/search?q=%23AEWRedemption&src=trend_click" },
          { t: "【第2】Ospreay", s: "Trends24美国榜最新第3；Will Ospreay在AEW Redemption剧情中与Jon Moxley、Young Bucks相关，赛后关于他是否该“扣动扳机”的讨论升温。", link: "https://twitter.com/search?q=Ospreay&src=trend_click" },
          { t: "【第3】Corey Heim", s: "Trends24前一小时榜首；NASCAR官方赛果显示Corey Heim赢下2026 Brickyard 400，160圈后领先Christopher Bell、Joey Logano，引发赛车圈热议。", link: "https://twitter.com/search?q=%22Corey%20Heim%22&src=trend_click" },
          { t: "【第4】Jackson Koivun", s: "Trends24榜单持续出现；Auburn选手Jackson Koivun在3M Open以25-under 259夺得个人首个PGA Tour冠军，并刷新赛事得分纪录。", link: "https://twitter.com/search?q=%22Jackson%20Koivun%22&src=trend_click" },
          { t: "【第5】Fauci", s: "Trends24最新第18；纽约邮报披露Rand Paul公布的Fauci日记，称其在2020年美国新冠死亡超6万人时记录媒体关注和名气变化，引发政治争论。", link: "https://twitter.com/search?q=Fauci&src=trend_click" }
        ]
      }
    ],
    podcasts: [
      { show: "硅谷101", title: "E245｜藏在大模型背后的新闻人：GPT们的回复是这样写出来的", note: "7月23日更新，讨论内容工程师如何把新闻、编辑和纪录片经验转化为大模型回复风格。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/5aeaeb64-9165-4271-9884-23329b511e11.mp3", link: "https://sv101.fireside.fm/258" },
      { show: "What's Next｜科技早知道", title: "可以给你的 Agent 发一点零花钱了 | S10E22", note: "7月22日更新，梳理Visa、Mastercard、Stripe、Google、OpenAI布局Agent支付基础设施。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/9a652c19-ceb3-46c2-87b4-bca36e684311.mp3", link: "https://guiguzaozhidao.fireside.fm/20240436" },
      { show: "疯投圈", title: "143 ✪ 🚗「蔚小理」的高端探索", note: "7月27日更新，从商业分析和消费品牌角度讨论蔚来、小鹏、理想在价格战中的高端化路径。", audio: "https://rio.xyzcdn.net/crazycapital/ep143.mp3", link: "https://crazy.capital/143" }
    ]
  },
  {
    date: "2026-07-26",
    weekday: "周日",
    lead: {
      title: "RSS 2026现场提醒：具身智能还没到“路线定论”时刻",
      link: "https://www.qbitai.com/2026/07/460542.html",
      body: "量子位在7月25日的RSS 2026现场报道里，把具身智能的热词争论拉回了具体问题：会议1月30日截稿、4月27日录用、7月13日开会，顶会论文天然滞后约5个半月，因此会场上仍有大量VLA与模仿学习讨论。Physical Intelligence相关受访者强调，VLA和世界模型并不冲突，π0.7也引入了世界模型组件。\n背景是国内过去半年频繁把世界模型视为机器人新答案，但PI的π0.7论文和博客仍把“steerable”放在核心位置：模型用语言、元数据、控制模态和视觉子目标来约束动作，而不是只靠生成未来画面。EgoVerse论文则给出另一条证据链：其数据集包含1362小时、8万段人类示范、1965个任务和2087名示范者，结论不是数据越多越好，而是人类数据与机器人任务目标是否对齐。\n容易被忽略的细节是，Karen Liu团队的VLK选择用3D Gaussian Splatting重建室内场景，自动合成4.8万条视觉、语言和全身运动学轨迹，再迁移到Unitree G1。这说明具身智能竞争不只是“VLA还是世界模型”，更像是数据配方、仿真资产、硬件形态和真实动作监督的系统工程。",
      why: "对中国AI读者来说，这意味着国产机器人硬件优势很重要，但真正拉开差距的可能是数据闭环和系统工程，而不是追一个单一路线标签。",
      sources: [
        { name: "量子位", link: "https://www.qbitai.com/2026/07/460542.html" },
        { name: "Physical Intelligence", link: "https://www.pi.website/blog/pi07" },
        { name: "EgoVerse", link: "https://arxiv.org/abs/2604.07607" },
        { name: "VLK", link: "https://vision-language-kinematics.github.io/" }
      ]
    },
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "吴恩达开源个人桌面Agent", s: "量子位7月25日报道，吴恩达团队发布100%开源的个人桌面Agent，面向本地电脑自动执行办公与浏览器任务；项目把代码、模型调用和操作日志开放，适合开发者复现端侧Agent工作流。", w: "个人Agent从云端走向桌面，开源会加快工具链迭代。", link: "https://www.qbitai.com/2026/07/460892.html" },
          { t: "Monday.com加入AI裁员名单", s: "TechCrunch 7月26日整理称，Monday.com成为最新把裁员与AI效率提升挂钩的科技公司；该追踪清单已累计列出20家在2026年公开提到AI因素的雇主。", w: "AI替代开始进入公司公告，影响不只停在演示层。", link: "https://techcrunch.com/2026/07/25/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/" },
          { t: "美国图书馆办“避开AI”工作坊走红", s: "TechCrunch 7月25日报道，美国多地图书馆的“Avoiding AI”工作坊在社交平台走红，面向不想被大科技产品默认接入AI的用户，课程重点是搜索、写作和隐私设置。", w: "AI普及越快，反向需求也越清晰，产品默认值会被审视。", link: "https://techcrunch.com/2026/07/25/librarians-are-hosting-viral-avoiding-ai-workshops-for-people-who-are-fed-up-with-big-tech/" },
          { t: "AI数据中心扰动电网问题升温", s: "TechCrunch 7月25日报道，一次输电线故障暴露AI数据中心负载波动风险；ON.Energy称正为4个数据中心园区安装合计3吉瓦电池系统，PJM同类断开事件已比2024年1.5吉瓦规模翻倍。", w: "算力扩张开始受电网约束，基础设施会决定模型速度。", link: "https://techcrunch.com/2026/07/25/one-fallen-power-line-exposed-a-growing-ai-data-center-problem-heres-how-to-fix-it/" },
          { t: "眸深智能完成Pre-A轮融资", s: "36氪7月26日报道，端侧具身大脑公司眸深智能完成近亿元Pre-A轮追加融资；团队由复旦教授、前英特尔首席科学家等参与，方向是机器人本体上的视觉、控制和端侧推理。", w: "端侧机器人脑是国产具身落地的关键赛道。", link: "https://36kr.com/p/3911162147640456?f=rss" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "台风“红霞”凌晨登陆广东惠州", s: "中央气象台消息，今年第12号台风“红霞”7月26日3时50分前后在广东惠州市惠东县平海镇登陆，登陆时中心最大风力14级、45米/秒，中心最低气压955百帕。", link: "https://www.cnr.cn/newscenter/kuaixun/20260726/t20260726_527729900.shtml" },
          { t: "中国两名学者首获菲尔兹奖", s: "BBC中文7月25日报道，王虹和邓煜与另外2名学者同获菲尔兹奖；王虹35岁，是史上第3位获奖女性，邓煜37岁，两人研究都指向超过百年的数学难题。", link: "https://www.bbc.com/zhongwen/articles/c86npjqxpx9o/trad?at_medium=RSS&at_campaign=rss" },
          { t: "国家反诈中心App上线AI内容鉴定", s: "36氪7月25日早报提到，国家反诈中心App已支持一键检测AI生成痕迹；公安部此前披露，今年上半年已侦办AI生成网络谣言案件170余起。", link: "https://36kr.com/p/3910351337821318?f=rss" },
          { t: "电影《三国第一部：争洛阳》上映16天撤档", s: "新浪财经援引观察者网消息，《三国第一部：争洛阳》截至7月25日上映16天，票房8146.5万元，当日排片占比仅0.8%；片方此前7月17日曾推出不好看可退票措施。", link: "https://finance.sina.com.cn/roll/2026-07-25/doc-iniizrew9013913.shtml" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "美国小企业起诉特朗普新关税", s: "AP 7月26日报道，美国小企业已提起2起诉讼，挑战对60个国家进口商品征收两位数税率的新关税；争议焦点是政府是否能用1974年贸易法301条款覆盖约99%美国进口。", link: "https://apnews.com/article/fd55d81461c38892a03c322bfcc46e95" },
          { t: "Ryan Gosling将出演漫威Ghost Rider", s: "AP 7月26日报道，Ryan Gosling将在漫威电影宇宙出演Ghost Rider，并与导演Shawn Levy合作；该片计划2028年上映，圣迭戈动漫展现场约7000名观众见证发布。", link: "https://apnews.com/article/35f4476d32fdd55acc7bcbe608a8e2d2" },
          { t: "《黑豹3》确定新主演", s: "Entertainment Weekly 7月26日报道，Ryan Coogler在SDCC 2026宣布David Jonsson参演《Black Panther 3》，影片计划2028年12月15日上映，延续《Wakanda Forever》留下的T'Challa之子线索。", link: "https://ew.com/ryan-coogler-announces-new-black-panther-star-for-third-movie-12026998" },
          { t: "美国经济周报聚焦油价和房贷", s: "AP 7月25日梳理称，美国汽油均价升至每加仑4.11美元以上，30年期按揭利率升至6.58%，同时上周初请失业金人数降至18.7万，显示家庭成本和劳动力市场走势分化。", link: "https://apnews.com/article/78432a0b6870a29f63ccf64adfab0c0b" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "特朗普新关税覆盖60个经济体", s: "AP 7月25日报道，美国7月24日宣布对60个经济体加征10%至12.5%关税，理由是强迫劳动执法不足；这些措施覆盖约99%的美国进口，并取代刚到期的10%全球关税。", link: "https://apnews.com/article/160b5c76b005a5d703cdcc4644f7cdc9" },
          { t: "美股周线承压，油价冲高后回落", s: "AP 7月24日数据称，标普500收于7411.98点、道指51947.25点，纳指报24975.82点；布伦特原油前一日触及102美元后回落至96.78美元，主要指数本周均收跌。", link: "https://apnews.com/article/02d01b8f38ccd51f605c4414cdd4fa9b" },
          { t: "疯投圈讨论体验经济出海", s: "疯投圈7月10日更新第142期，复盘日本考察中的体验经济案例，包括东京迪士尼储物柜每年约5000万元人民币收入，讨论中国消费企业如何承接入境游新增量。", link: "https://crazy.capital/142" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】台风“红霞”登陆广东惠州", s: "知乎热榜第1，抓取时约1228万热度；网友主要关注3时50分登陆、14级风力、45米/秒风速，以及广东、江西、湖南等地后续降雨影响。", link: "https://www.zhihu.com/question/2062972309652992711" },
          { t: "【第2】《三国第一部：争洛阳》撤档", s: "知乎热榜第2，抓取时约294万热度；讨论点集中在上映16天票房未破亿、撤档能否补救口碑，以及历史大片是否仍能靠IP吸引观众。", link: "https://www.zhihu.com/question/2064445264405050834" },
          { t: "【第3】为什么减肥常说少吃米面馒头", s: "知乎热榜第3，抓取时约286万热度；回答围绕精制碳水、总热量缺口、血糖波动和中国家庭主食结构展开争论。", link: "https://www.zhihu.com/question/2057049665552623029" },
          { t: "【第4】洞洞鞋、勃肯鞋接班凉鞋", s: "知乎热榜第4，抓取时约206万热度；网友把鞋类变化和通勤舒适、户外风、懒人穿搭及年轻人消费审美联系起来。", link: "https://www.zhihu.com/question/2062144078456648299" },
          { t: "【第5】凡人修仙传导演骂网友争议", s: "知乎热榜第5，抓取时约184万热度；争论集中在动画改编节奏、主创回应边界和长篇IP粉丝对细节还原的要求。", link: "https://www.zhihu.com/question/2064287361543017092" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】极客湾手机续航大横评", s: "UP主极客湾Geekerwan，抓取时播放约56.3万、点赞约10.1万；视频自购78台零售手机，用AI Agent 5.0标准测试续航和电池锁容。", link: "https://www.bilibili.com/video/BV1LR336sEFX" },
          { t: "【第2】MC动画：于是，我们的故事开始了", s: "UP主Minecraft动画电影同好会，抓取时播放约56.4万、点赞约9.4万；Blender制作的MC动画在热门榜第2，观众主要讨论制作完成度。", link: "https://www.bilibili.com/video/BV1fNN46HE9w" },
          { t: "【第3】凡人修仙传之慕兰之战第8集", s: "UP主哔哩哔哩国创，抓取时播放约568.9万、点赞约16.0万；总第184集继续每周六11点更新，弹幕讨论剧情推进。", link: "https://www.bilibili.com/video/BV19agi6pE4X" },
          { t: "【第4】陈翔六点半新短剧", s: "UP主陈翔六点半，抓取时播放约615.3万、点赞约27.1万；标题为“有人在这里被爱过，有人在这里学会了爱”，延续短剧叙事。", link: "https://www.bilibili.com/video/BV1yagv6eE25" },
          { t: "【第5】明日方舟EP酸橙色信笺", s: "UP主明日方舟，抓取时播放约57.1万、点赞约9.2万；EP预告7月28日18点上架各音乐平台，粉丝集中讨论安洁莉娜夏日影像。", link: "https://www.bilibili.com/video/BV1nB3u6tEHD" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "【第1】台风红霞最新路径", s: "抖音热榜第1，抓取时热度约1154万；用户关注台风登陆后的北上路径、广东沿海风雨和后续是否影响江西、湖南、湖北。", link: "" },
          { t: "【第2】台风红霞登陆广东", s: "抖音热榜第2，抓取时热度约1145万；短视频集中呈现惠州登陆、深圳大风和沿海渔船避风现场。", link: "" },
          { t: "【第3】海上“超级心脏”就位", s: "抖音热榜第3，抓取时热度约1137万；话题围绕大型海工装备或能源平台关键设备安装，网友关注国产装备规模和海上施工难度。", link: "" },
          { t: "【第4】复盘一周穿搭思路", s: "抖音热榜第4，抓取时热度约1128万；内容以夏季通勤、周末出行和基础款搭配为主，评论区讨论低成本穿搭和身材适配。", link: "" },
          { t: "【第5】初中生也能看懂的挂谷猜想解析", s: "抖音热榜第5，抓取时热度约1027万；数学科普借菲尔兹奖热度解释挂谷猜想，用户争论“看懂”和真正理解之间的差距。", link: "" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】Shawn Levy", s: "Trends24美国榜第1；热度来自SDCC 2026漫威发布，Shawn Levy将执导Ryan Gosling主演的Ghost Rider，影片计划2028年上映。", link: "https://twitter.com/search?q=Shawn%20Levy" },
          { t: "【第2】Ghost Rider", s: "Trends24美国榜第2；Ryan Gosling加入MCU出演Ghost Rider引发讨论，角色此前由Nicolas Cage在2007年和2012年电影中饰演。", link: "https://twitter.com/search?q=Ghost%20Rider" },
          { t: "【第3】David Jonsson", s: "Trends24美国榜第3；Ryan Coogler宣布David Jonsson参演《Black Panther 3》，影片定档2028年12月15日，接续T'Challa之子设定。", link: "https://twitter.com/search?q=David%20Jonsson" },
          { t: "【第4】Black Panther 3", s: "Trends24美国榜第4；SDCC现场确认第三部《黑豹》进展，粉丝围绕新黑豹人选、Chadwick Boseman遗产和Denzel Washington角色猜测讨论。", link: "https://twitter.com/search?q=Black%20Panther%203" },
          { t: "【第5】#AEWCollision", s: "Trends24美国榜第5；7月25日AEW Collision在Nashville播出，为7月26日Redemption付费赛事预热，节目含8场比赛和梯子赛资格线索。", link: "https://twitter.com/search?q=%23AEWCollision" }
        ]
      }
    ],
    podcasts: [
      { show: "硅谷101", title: "E245｜藏在大模型背后的新闻人：GPT们的回复是这样写出来的", note: "7月23日更新，讲大模型回答背后的新闻编辑、事实选择和信息组织机制。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/5aeaeb64-9165-4271-9884-23329b511e11.mp3", link: "https://sv101.fireside.fm/258" },
      { show: "What's Next｜科技早知道", title: "可以给你的 Agent 发一点零花钱了 | S10E22", note: "7月22日更新，讨论Agent支付、授权和未来自动执行任务的产品边界。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/9a652c19-ceb3-46c2-87b4-bca36e684311.mp3", link: "https://guiguzaozhidao.fireside.fm/20240436" },
      { show: "疯投圈", title: "142 ✪ 产品体验学日本、全球营销学韩国", note: "7月10日更新，从日本体验经济和韩国全球营销看消费品牌出海。", audio: "https://rio.xyzcdn.net/crazycapital/ep142.mp3", link: "https://crazy.capital/142" }
    ]
  },
  {
    date: "2026-07-25",
    weekday: "周六",
    lead: {
      title: "Anthropic发布Claude Opus 5：把旗舰能力下放到日常模型",
      link: "https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/",
      body: "Anthropic在7月24日发布Claude Opus 5，定位为新一代重量级模型。TechCrunch称，它距离Opus 4.8上线仅约2个月，价格和使用限制都低于Fable 5，却在公告列出的部分基准上超过Fable 5。Anthropic强调，Opus 5更擅长验证自身工作、反复迭代直到成功，示例包括在提示不完整时自行写出计算机视觉流水线。\nThe Verge补充，Anthropic把Opus 5推给企业客户，主打知识工作、复杂编码和生物相关任务；Fable 5仍保留给长周期Agent等最激进场景。背景是Fable 5此前因安全争议与美国政府反复沟通，OpenAI的GPT-5.6也曾经历约2周、仅面向政府批准实体的有限预览。\n最值得注意的是，Anthropic没有只讲更强，而是反复强调安全边界：公司称Opus 5比Opus 4.8具备更强网络安全防护，是“最对齐的Opus模型”。这说明前沿模型竞争正在从单纯参数和榜单，转向能力、价格、可用限制和监管可接受度的组合赛。",
      why: "对中国AI读者来说，Opus 5显示海外大模型正把高端能力做成更便宜、更日常的企业工具，国产模型也会被迫同时卷性能、成本和安全叙事。",
      sources: [
        { name: "TechCrunch", link: "https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/" },
        { name: "The Verge", link: "https://www.theverge.com/ai-artificial-intelligence/970105/claude-opus-5-announced-anthropic-ai-model-release" },
        { name: "OpenAI Community", link: "https://community.openai.com/t/chatgpt-voice-is-now-in-the-desktop-app/1388031" }
      ]
    },
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "Vivix发布实时交互多模态模型A1", s: "量子位报道，Vivix A1拥有近30B激活参数，单卡突破10000 video tokens/s，最短300毫秒响应新输入，平均0.6秒出现画面反应，主打像视频通话一样驱动虚拟角色实时行动。", w: "视频生成从短片走向实时交互，门槛变化很关键。", link: "https://www.qbitai.com/2026/07/460174.html" },
          { t: "国产世界模型登顶WorldScore榜单", s: "兔展智能联合北大、鹏城实验室推出UniWorld-View，适配国产昇腾算力，代码和权重全部开源；模型支持单图3D与视频4D生成，还能按指定相机轨迹做360度新视角视频。", w: "世界模型开始拼几何一致性，不只是拼画面好看。", link: "https://www.qbitai.com/2026/07/460041.html" },
          { t: "Reid Hoffman等筹建AI实验室Prentis", s: "TechCrunch称，Reid Hoffman与Mark Pincus共同创办的新AI实验室Prentis正洽谈约1亿美元融资，团队试图在大模型应用和新型交互方向切入，但仍处早期募资阶段。", w: "明星创业者继续涌入AI，资金会推高应用层竞争。", link: "https://techcrunch.com/2026/07/24/prentis-new-ai-lab-co-founded-by-reid-hoffman-mark-pincus-in-talks-to-raise-100m/" },
          { t: "OpenAI语音模式进入ChatGPT桌面端", s: "TechCrunch 7月24日报道，ChatGPT Voice已进入桌面应用，可与ChatGPT Work和Codex协同完成任务；OpenAI社区公告称其由GPT-Live驱动，并向Plus、Pro、Business、Edu、Enterprise等计划全球推出。", w: "语音正在变成调度Agent的入口，而非聊天玩具。", link: "https://techcrunch.com/2026/07/24/openais-new-voice-mode-makes-it-to-the-chatgpt-desktop-app/" },
          { t: "Midjourney收购占星应用Co-Star", s: "The Verge 7月24日报道，Midjourney收购了占星应用Co-Star；这家公司此前以AI图像生成出圈，此次并购把用户社区、个性化内容和生成式视觉产品放到同一条增长线上。", w: "AI内容产品开始买社区入口，分发比模型更稀缺。", link: "https://www.theverge.com/ai-artificial-intelligence/970894/midjourney-co-star-acquisition" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "中国两名学者首获菲尔兹奖", s: "BBC中文报道，王虹和邓煜与另外2名学者同获菲尔兹奖，每人获1.5万加元奖金；王虹35岁，是史上第3位获奖女性，邓煜37岁，两人均破解超过百年的数学难题。", link: "https://www.bbc.com/zhongwen/articles/c86npjqxpx9o/trad?at_medium=RSS&at_campaign=rss" },
          { t: "商务部将14家欧盟实体列入管控名单", s: "商务部7月24日发布2026年第30号公告，将拉法特集团等14家欧盟实体列入出口管制管控名单，禁止向其出口两用物项，特殊情况需由出口经营者提出申请。", link: "https://www.mofcom.gov.cn/zwgk/zcfb/art/2026/art_2c9a32aa73bf4f5ea80ffa83e62fb259.html" },
          { t: "小鹏召回33473辆X9汽车", s: "中新经纬援引市监总局消息，小鹏自2026年8月28日起召回2023年8月8日至2025年8月11日生产的33473辆X9，原因是前空气弹簧气密性下降，极端情况下影响操控。", link: "https://www.jwview.com/jingwei/html/07-24/680794.shtml" },
          { t: "国家反诈中心App支持AI内容鉴定", s: "中国网报道，公安部介绍国家反诈中心App已布建人工智能内容鉴定功能，用户可上传可疑视频、语音、图片；今年上半年公安机关侦办AI生成网络谣言案件170余起。", link: "https://news.china.com.cn/2026-07/24/content_118616036.html" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "曼德海峡威胁引发红海航运担忧", s: "BBC中文报道，胡塞武装威胁对沙特实施曼德海峡海上禁运；该海峡宽约36公里，全球约12%的海运石油经此通过，红海走廊还承担约四分之一海上交通。", link: "https://www.bbc.com/zhongwen/articles/c4g63djrgy8o/trad?at_medium=RSS&at_campaign=rss" },
          { t: "美国新关税影响60个贸易伙伴", s: "BBC中文报道，美国以强迫劳动为由推出新关税措施，影响中国、台湾等60个贸易伙伴；该议题把供应链合规、劳工审查和贸易摩擦重新推到跨境企业面前。", link: "https://www.bbc.com/zhongwen/articles/clyezy3l60qo/trad?at_medium=RSS&at_campaign=rss" },
          { t: "Meta暂停智能眼镜限流收费计划", s: "The Verge报道，Meta暂停对智能眼镜听清语音功能实施限流的计划；争议焦点在于该能力本地运行，却曾计划向用户收取每月20美元订阅费。", link: "https://www.theverge.com/tech/970970/after-backlash-meta-pauses-plan-to-rate-limit-its-smart-glasses" },
          { t: "白宫记者晚宴延期后重办", s: "AP报道，2026年白宫记者协会晚宴在4月安全事件后改期举行，约700名宾客参加；特朗普发表超过1小时讲话，现场同时向受伤特勤人员和获奖记者致意。", link: "https://apnews.com/article/dfa0ecdbe3552910903d5c23a8e96a35" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "携程因垄断被罚没51.79亿元", s: "科技日报报道，市场监管总局责令携程停止违法行为，退还酒店经营者订单储备金1.22亿元，没收违法所得16.58亿元，并按2025年境内销售额469.58亿元的7.5%罚款35.21亿元。", link: "https://www.stdaily.com/web/gdxw/2026-07/25/content_553516.html" },
          { t: "欧盟对谷歌罚款8.9亿欧元", s: "新华社报道，欧盟委员会7月23日认定谷歌违反《数字市场法》，对其搜索和应用商店业务共罚8.9亿欧元，并要求谷歌在60天内完成整改，否则可能追加罚款。", link: "https://app.xinhuanet.com/news/article.html?articleId=20260723d0047f0adb51446cb4e02b69f477d4b7" },
          { t: "Roku硬件最高涨价50美元", s: "The Verge报道，Roku上调全线流媒体硬件价格，HD Streaming Stick从29.99美元涨至39.99美元，部分设备涨幅高达50美元；公司把原因归于预计持续到2027年的内存短缺。", link: "https://www.theverge.com/streaming/970814/roku-streaming-price-increase" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】携程垄断被罚没51.79亿元", s: "知乎热榜第1，抓取时约3870万热度，网友主要讨论平台流量分配、酒店独家合作和51.79亿元罚没对在线旅游行业的警示。", link: "https://www.zhihu.com/question/2064289475916560100" },
          { t: "【第2】商务部管控14家欧盟实体", s: "知乎热榜第2，抓取时约1257万热度，讨论出口管制名单、两用物项限制和中欧经贸安全边界。", link: "https://www.zhihu.com/question/2064019046736175900" },
          { t: "【第3】小鹏X9召回33473辆", s: "知乎热榜第3，抓取时约482万热度，车主围绕空气弹簧漏气、3万公里后故障和召回维修流程展开争论。", link: "https://www.zhihu.com/question/2064072658795419100" },
          { t: "【第4】Kimi K3参数量达2.8万亿", s: "知乎热榜第4，抓取时约387万热度，讨论杨植麟团队Kimi K3的2.8万亿参数、年轻成员和中国开源模型路线。", link: "https://www.zhihu.com/question/2063822441583993600" },
          { t: "【第5】五人分1亿元如何分配", s: "知乎热榜第5，抓取时约386万热度，网友把1亿元分配题拆成博弈论、谈判心理和否决权设计问题。", link: "https://www.zhihu.com/question/2063192386587644400" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】世界上五种特色调式音阶", s: "UP主火星课堂i投稿，榜单抓取时播放量约399万、点赞约52.7万，用几何图形呈现5种特色调式音阶，位列B站排行榜第1。", link: "https://www.bilibili.com/video/BV1KLg66DEi2" },
          { t: "【第2】我婚礼上要放这个", s: "UP主Vinheteiro投稿，榜单抓取时播放量约532万、点赞约54.8万，以演奏和婚礼场景反差制造传播点，位列B站排行榜第2。", link: "https://www.bilibili.com/video/BV1n9gC6HEzP" },
          { t: "【第3】《下一个是谁》第七季（2）", s: "UP主自来卷三木投稿，榜单抓取时播放量约198万、点赞约24.8万，系列内容继续更新，位列B站排行榜第3。", link: "https://www.bilibili.com/video/BV1KRg462E53" },
          { t: "【第4】星穹铁道×Fate联动PV", s: "UP主崩坏星穹铁道发布联动PV，榜单抓取时播放量约344万、点赞约24.6万，围绕Fate[UBW]联动预热，位列B站排行榜第4。", link: "https://www.bilibili.com/video/BV1ThgD6nEie" },
          { t: "【第5】《梦战：剑之海》实机预告", s: "UP主梦战剑之海发布首支实机预告，榜单抓取时播放量约468万、点赞约37.0万，同时开启全球首测招募，位列B站排行榜第5。", link: "https://www.bilibili.com/video/BV1AnKs6tE2n" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "今日抓取失败", s: "抖音热榜接口在今天抓取时连续出现TLS连接失败，备用聚合接口同样未能返回可解析榜单；按规程不编造排名。", link: "" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】LeBron", s: "Trends24美国榜出现LeBron；当天美国体育媒体集中报道41岁LeBron James自由市场动向，Topps还抢先发布其加盟76人的消息。", link: "https://twitter.com/search?q=LeBron" },
          { t: "【第2】Starship", s: "Starship因SpaceX第13次试飞登上趋势；AP称该任务部署20颗新一代Starlink卫星，飞船在印度洋保持完整溅落，但助推器未能软着陆。", link: "https://twitter.com/search?q=Starship" },
          { t: "【第3】#SmackDown", s: "#SmackDown热度来自7月24日WWE节目，Cody Rhodes与CM Punk为SummerSlam继续升温，Nikki Bella回归，多个新赛事安排确认。", link: "https://twitter.com/search?q=%23SmackDown" },
          { t: "【第4】Azzi", s: "Azzi Fudd赢得2026年WNBA三分大赛引发讨论；她决赛拿到30分，成为首位夺冠的新秀和首位获该奖的UConn校友。", link: "https://twitter.com/search?q=Azzi" },
          { t: "【第5】White House Correspondents", s: "白宫记者协会晚宴延期后于7月24日举行，约700人参加；特朗普发表超过1小时讲话，安全和新闻自由议题同步成为讨论焦点。", link: "https://twitter.com/search?q=White%20House%20Correspondents" }
        ]
      }
    ],
    podcasts: [
      { show: "What's Next｜科技早知道", title: "可以给你的 Agent 发一点零花钱了 | S10E22", note: "本期围绕Agent支付、授权和执行能力展开，讨论智能体从回答问题走向真实行动时需要的基础设施。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/9a652c19-ceb3-46c2-87b4-bca36e684311.mp3", link: "https://guiguzaozhidao.fireside.fm/20240436" },
      { show: "疯投圈", title: "142 ✪ 产品体验学日本、全球营销学韩国", note: "本期分享日本体验经济考察和韩国全球营销观察，讨论线下体验、IP模式和入境游消费机会。", audio: "https://rio.xyzcdn.net/crazycapital/ep142.mp3", link: "https://crazy.capital/142" }
    ]
  },
  {
    date: "2026-07-22",
    weekday: "周三",
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "IBM称AI并未终结大型机需求", s: "TechCrunch报道，IBM在大型机销售不及预期后表示，AI只是短期挤压企业硬件预算，并不意味着大型机业务被AI取代。", link: "https://techcrunch.com/2026/07/22/after-shocking-quarter-ibm-insists-that-ai-isnt-killing-the-mainframe/" },
          { t: "谷歌以云业务增长支撑AI投入", s: "TechCrunch报道，谷歌云业务因企业采用AI服务和AI基础设施而增长，公司借此解释其持续扩大的AI资本开支。", link: "https://techcrunch.com/2026/07/22/google-justifies-its-massive-ai-spending-with-a-booming-cloud-business/" },
          { t: "OpenAI测试失误引发Hugging Face攻击复盘", s: "TechCrunch称，OpenAI隔离测试环境配置失误被安全专家认为是AI驱动攻击Hugging Face得以发生的重要原因。", link: "https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/" },
          { t: "百度文心助手任务Agent登顶榜单", s: "量子位报道，百度文心助手任务Agent在国际权威榜单中取得领先，相关成绩被用于展示国产智能体能力进展。", link: "https://www.qbitai.com/2026/07/457117.html" },
          { t: "Halliday发布第二代AI眼镜", s: "量子位报道，Halliday G2通过Meeting Flow等能力把实时智能融入会议和商务沟通场景，AI眼镜继续向工作流参与演进。", link: "https://www.qbitai.com/2026/07/457049.html" },
          { t: "机器人公司Atoms获17亿美元融资", s: "TechCrunch报道，Travis Kalanick旗下机器人公司Atoms完成17亿美元融资，由a16z领投，定位于工业AI与机器人结合。", link: "https://techcrunch.com/2026/07/22/travis-kalanicks-robotics-company-raises-1-7b-led-by-a16z/" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "小红书回应IPO受阻传闻", s: "36氪8点1氪援引报道称，小红书回应因前员工举报影响IPO的说法，称目前流传的IPO相关信息均不属实。", link: "https://36kr.com/p/3907461333144711?f=rss" },
          { t: "拾玥科技获数千万元天使轮融资", s: "36氪报道，机器人灵巧操作方案商拾玥科技完成天使轮融资，资金将用于团队扩张、产品迭代和灵巧操作数据闭环。", link: "https://36kr.com/p/3907536767833473?f=rss" },
          { t: "设序科技完成B轮超亿元融资", s: "36氪报道，工业AI设计研发解决方案商设序科技累计融资超3亿元，计划继续投入出海和核心模型技术研发。", link: "https://36kr.com/p/3907532622648453?f=rss" },
          { t: "厦门翔安机场设计牵动金门讨论", s: "BBC中文报道，翔安机场设计中的金门连接构想引发当地居民复杂看法，既有发展期待，也有政治和安全顾虑。", link: "https://www.bbc.com/zhongwen/articles/cx25g733w65o/trad?at_medium=RSS&at_campaign=rss" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "美国财政部威胁对AI模型争议采取制裁", s: "TechCrunch报道，白宫称Moonshot蒸馏Anthropic模型后，美国财政部发出制裁威胁，相关事件加剧美国对中国开源模型的争论。", link: "https://techcrunch.com/2026/07/22/treasury-threatens-sanctions-after-white-house-claims-moonshot-distilled-anthropics-fable/" },
          { t: "乌克兰军方总司令遭革职", s: "BBC中文报道，乌克兰在连日抗议后解除军方总司令职务，相关人事变动发生在国防部高层调整引发反弹之后。", link: "https://www.bbc.com/zhongwen/articles/cx2vpjg3qlpo/trad?at_medium=RSS&at_campaign=rss" },
          { t: "TikTok直播带货在英国升温", s: "BBC中文报道，英国社群媒体直播购物正在加速进入日常消费，一些主播称单日销售额可达到较高水平。", link: "https://www.bbc.com/zhongwen/articles/cpw92ew1rw2o/trad?at_medium=RSS&at_campaign=rss" },
          { t: "日本短裤上班政策引发性别争议", s: "BBC中文报道，东京Cool Biz政策鼓励男性穿短裤降温，但部分女性认为职场露腿期待和着装规则仍存在不公平。", link: "https://www.bbc.com/zhongwen/articles/c20dwywr8gxo/trad?at_medium=RSS&at_campaign=rss" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "耐克将终止滔搏线上经销权", s: "36氪8点1氪报道，耐克通知滔搏其中国内地在线平台销售将于2027年起终止，滔搏股价随消息大幅下跌。", link: "https://36kr.com/p/3907461333144711?f=rss" },
          { t: "苹果拟推出设备租赁计划", s: "36氪8点1氪援引报道称，苹果准备推出Apple Upgrade租赁计划，初期至少覆盖美国市场和多数主力硬件品类。", link: "https://36kr.com/p/3907461333144711?f=rss" },
          { t: "Kimi据称最快6个月内赴港上市", s: "36氪8点1氪援引媒体报道称，Kimi计划启动上市前融资，目标投前估值较高，最快6个月内登陆港股。", link: "https://36kr.com/p/3907461333144711?f=rss" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】《功夫女足》被曝线上偷票房", s: "知乎热榜第1，话题围绕《功夫女足》线上渠道被偷票房超2000万元、全国偷漏占比较高的报道展开讨论。", link: "https://www.zhihu.com/question/2063269666466932392" },
          { t: "【第2】小红书被曝联系老员工补发期权", s: "知乎热榜第2，讨论小红书是否以补偿换取前员工签署相关条款，以及该传闻对IPO进程的潜在影响。", link: "https://www.zhihu.com/question/2063292318887539352" },
          { t: "【第3】西门庆为何非要杀武大", s: "知乎热榜第3，网友从《水浒传》人物关系、风险判断和叙事逻辑角度讨论这一经典情节。", link: "https://www.zhihu.com/question/2047419289150477897" },
          { t: "【第4】《第九区》导演发布AI短片", s: "知乎热榜第4，话题关注尼尔·布洛姆坎普用字节Seedance 2.0生成13分钟AI短片及AI电影长片化可能。", link: "https://www.zhihu.com/question/2062918586486583714" },
          { t: "【第5】胡歌和刘诗诗为何少上综艺", s: "知乎热榜第5，讨论演员曝光方式、作品路线和真人秀参与度之间的关系。", link: "https://www.zhihu.com/question/326219584" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】树恨你", s: "UP主鲤鱼Ace投稿，榜单抓取时播放量约677万，位列B站排行榜第1。", link: "https://www.bilibili.com/video/BV1h4KU66ENd" },
          { t: "【第2】无骨草鱼教学", s: "UP主温柔雄鱼档发布无骨草鱼制作教学，榜单抓取时播放量约449万，位列B站排行榜第2。", link: "https://www.bilibili.com/video/BV1P6KA6NEDq" },
          { t: "【第3】《梦战：剑之海》实机预告", s: "UP主梦战剑之海发布游戏首支实机预告，榜单抓取时播放量约461万，位列B站排行榜第3。", link: "https://www.bilibili.com/video/BV1AnKs6tE2n" },
          { t: "【第4】差点被烟管单杀了", s: "UP主-大大大大古投稿，榜单抓取时播放量约324万，位列B站排行榜第4。", link: "https://www.bilibili.com/video/BV11oK16pEEz" },
          { t: "【第5】千万博主谈B站真相", s: "UP主逗比的雀巢发布博主分析主题视频，榜单抓取时播放量约384万，位列B站排行榜第5。", link: "https://www.bilibili.com/video/BV1oiKm6yEYU" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "【第1】我的夏日主线任务online", s: "抖音热榜第1，抓取时热度约1166万，话题围绕用户分享夏日生活主线任务展开。", link: "https://www.douyin.com/search/%E6%88%91%E7%9A%84%E5%A4%8F%E6%97%A5%E4%B8%BB%E7%BA%BF%E4%BB%BB%E5%8A%A1online" },
          { t: "【第2】今年菲尔兹奖候选人都在研究啥", s: "抖音热榜第2，抓取时热度约1160万，话题关注菲尔兹奖候选人的数学研究方向。", link: "https://www.douyin.com/search/%E4%BB%8A%E5%B9%B4%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%E5%80%99%E9%80%89%E4%BA%BA%E9%83%BD%E5%9C%A8%E7%A0%94%E7%A9%B6%E5%95%A5" },
          { t: "【第3】引力一号一箭九星发射", s: "抖音热榜第3，抓取时热度约1131万，话题关注引力一号火箭一箭九星发射动态。", link: "https://www.douyin.com/search/%E5%BC%95%E5%8A%9B%E4%B8%80%E5%8F%B7%E4%B8%80%E7%AE%AD%E4%B9%9D%E6%98%9F%E5%8F%91%E5%B0%84" },
          { t: "【第4】当我在暑假和crush表白成功后", s: "抖音热榜第4，抓取时热度约1131万，属于暑期情感与生活分享类热门话题。", link: "https://www.douyin.com/search/%E5%BD%93%E6%88%91%E5%9C%A8%E6%9A%91%E5%81%87%E5%92%8Ccrush%E8%A1%A8%E7%99%BD%E6%88%90%E5%8A%9F%E5%90%8E" },
          { t: "【第5】这届非遗手作太好玩了", s: "抖音热榜第5，抓取时热度约1049万，话题集中在非遗手作体验和传统技艺传播。", link: "https://www.douyin.com/search/%E8%BF%99%E5%B1%8A%E9%9D%9E%E9%81%97%E6%89%8B%E4%BD%9C%E5%A4%AA%E5%A5%BD%E7%8E%A9%E4%BA%86" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】NDAA", s: "Trends24抓取的美国X趋势榜第1，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=NDAA" },
          { t: "【第2】Clayface", s: "Trends24抓取的美国X趋势榜第2，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Clayface" },
          { t: "【第3】Saudi Arabia", s: "Trends24抓取的美国X趋势榜第3，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Saudi%20Arabia" },
          { t: "【第4】Wemby", s: "Trends24抓取的美国X趋势榜第4，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Wemby" },
          { t: "【第5】Phee", s: "Trends24抓取的美国X趋势榜第5，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Phee" }
        ]
      }
    ],
    podcasts: [
      { show: "What's Next｜科技早知道", title: "可以给你的 Agent 发一点零花钱了 | S10E22", note: "本期围绕Agent支付、授权和执行能力展开，讨论智能体从回答问题走向真实行动时需要的基础设施。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/9a652c19-ceb3-46c2-87b4-bca36e684311.mp3", link: "https://guiguzaozhidao.fireside.fm/20240436" },
      { show: "硅谷101", title: "E244｜机器人走错路了？与苏度韩铮聊聊具身智能的3D数据、路径分野与硅谷竞赛", note: "节目讨论具身智能中的3D数据、技术路线分野和硅谷竞争态势，关注机器人产业下一阶段落地问题。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/fc9a3737-81a9-49cf-a7d6-530c77df836e.mp3", link: "https://sv101.fireside.fm/257" },
      { show: "疯投圈", title: "142 ✪ 产品体验学日本、全球营销学韩国", note: "本期分享日本体验经济考察和韩国全球营销观察，讨论线下体验、IP模式和入境游消费机会。", audio: "https://rio.xyzcdn.net/crazycapital/ep142.mp3", link: "https://crazy.capital/142" }
    ]
  },
  {
    date: "2026-07-21",
    weekday: "周二",
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "Anthropic 15亿美元版权和解获批", s: "TechCrunch报道，法院已批准Anthropic就版权争议达成的15亿美元和解；报道同时指出，这并未解决训练AI时使用受版权保护作品的更广泛争议。", link: "https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/" },
          { t: "谷歌研发提升Gemini效率的新AI芯片", s: "TechCrunch援引报道称，Alphabet正开发一款新芯片，以提高Gemini模型的运行效率；该项目涉及谷歌在AI计算基础设施上的持续投入。", link: "https://techcrunch.com/2026/07/20/google-is-working-on-a-new-ai-chip-designed-to-make-gemini-more-efficient/" },
          { t: "MCP协议拟简化服务端会话处理", s: "TechCrunch报道，面向AI工具连接的MCP协议正通过更宽松、无状态的服务端会话ID处理方式降低使用复杂度，思路接近普通网站的会话机制。", link: "https://techcrunch.com/2026/07/20/ais-most-important-protocol-is-getting-a-little-bit-easier-to-use/" },
          { t: "阿里Qoder推出安全能力", s: "量子位报道，阿里Qoder上线新的安全能力，定位为向每位用户提供专属安全工程师式的辅助，以支持开发过程中的安全治理。", link: "https://www.qbitai.com/2026/07/455979.html" },
          { t: "不同模型厂商共用Agentic基础设施受关注", s: "量子位报道聚焦Agentic Infra的发展，讨论不同模型厂商使用同类智能体基础设施的趋势，以及这类底层能力在AI应用部署中的作用。", link: "https://www.qbitai.com/2026/07/455805.html" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "淘天公布AIGX体系四项技术成果", s: "36氪快讯称，淘天集团公布拍立淘全模态实时Agent、if Studio、Coupella智惠引擎和Agentic推荐系统Dream等四项技术成果。", link: "https://www.36kr.com/newsflashes/" },
          { t: "光轮智能与西门子达成合作", s: "36氪快讯称，光轮智能与西门子在WAIC 2026达成合作，计划将工业软件积累的物理模型、工程参数和工艺知识转化为机器人可调用的仿真能力。", link: "https://www.36kr.com/newsflashes/" },
          { t: "新易盛称下半年订单交付有望保持增长", s: "36氪快讯援引新易盛投资者关系记录称，其成都、泰国两地产能正依据订单指引扩充，预计下半年订单交付仍将较快增长。", link: "https://www.36kr.com/newsflashes/" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "美国AI标准机构负责人再度离任", s: "TechCrunch报道，美国人工智能标准与创新中心负责人已离任；报道将该职位描述为自前任AI事务负责人离开后人员更替频繁的岗位。", link: "https://techcrunch.com/2026/07/20/trumps-latest-ai-czar-has-already-resigned/" },
          { t: "波音称推出新客机前仍需修复财务", s: "36氪快讯援引波音首席执行官说法称，公司在研发推出新一代商用客机前，还需用数年修复财务体系并提升现有机型的可靠性与交付效率。", link: "https://www.36kr.com/newsflashes/" },
          { t: "X重建版Android应用全球上线", s: "TechCrunch报道，X表示其经过一年重建的Android应用已在全球推出，报道将其列为该平台移动端产品更新的一部分。", link: "https://techcrunch.com/2026/07/20/x-relaunches-a-rebuilt-android-app-after-year-long-effort/" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "沪市新增回购增持计划上限逾百亿元", s: "36氪快讯援引证券时报称，7月20日晚沪市新增25家上市公司回购或增持计划，金额上限合计超过100亿元。", link: "https://www.36kr.com/newsflashes/" },
          { t: "热门中概股美股盘前普涨", s: "36氪快讯称，抓取时阿里巴巴、百度盘前涨幅超过3%，京东和网易涨幅超过2%，多只热门中概股盘前走高。", link: "https://www.36kr.com/newsflashes/" },
          { t: "摩根大通称A股AI回调属去杠杆", s: "36氪援引摩根大通观点称，近期A股AI板块回调更接近杠杆出清而非基本面恶化，并提到大模型进步和硬件供给约束等因素。", link: "https://36kr.com/p/3903247190541955" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】684分考生被志愿规划进双非", s: "知乎热榜第1，话题围绕高分考生花费咨询费后被规划进入双非院校，引发对志愿填报服务责任和信息透明度的讨论。", link: "https://www.zhihu.com/question/2062830801440306762" },
          { t: "【第2】中国海警公布仁爱礁现场画面", s: "知乎热榜第2，讨论中国海警关于菲律宾非法坐滩舰艇相关事件的声明和现场画面，以及其中值得关注的信息。", link: "https://www.zhihu.com/question/2062608470700975381" },
          { t: "【第3】日韩为何同步流行麻辣烫", s: "知乎热榜第3，用户围绕日韩地区对麻辣烫的消费热度展开讨论，关注跨国饮食传播及其背后的消费文化因素。", link: "https://www.zhihu.com/question/2058337204255118363" },
          { t: "【第4】西安中考高分段人数引热议", s: "知乎热榜第4，话题关注西安中考600分以上考生数量较多、599分择校空间受限的现象，并讨论分数与位次的关系。", link: "https://www.zhihu.com/question/2062545131677528566" },
          { t: "【第5】西班牙夺冠会否改变足球战术", s: "知乎热榜第5，网友讨论西班牙夺冠后其他球队是否会模仿其打法，以及世界杯战术演变对比赛观赏性的影响。", link: "https://www.zhihu.com/question/2062436664497246459" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】树恨你", s: "UP主鲤鱼Ace投稿，榜单抓取时播放量约468万，位列B站排行榜第1。", link: "https://www.bilibili.com/video/BV1h4KU66ENd" },
          { t: "【第2】无骨草鱼教学", s: "UP主温柔雄鱼档发布无骨草鱼制作教学，榜单抓取时播放量约269万，位列B站排行榜第2。", link: "https://www.bilibili.com/video/BV1P6KA6NEDq" },
          { t: "【第3】订书钉演奏《千本樱》", s: "UP主不那么肝的老肝妈投稿，榜单抓取时播放量约995万，位列B站排行榜第3。", link: "https://www.bilibili.com/video/BV13YNd6dEb9" },
          { t: "【第4】水皮", s: "UP主文武俩兄弟投稿，榜单抓取时播放量约354万，位列B站排行榜第4。", link: "https://www.bilibili.com/video/BV1dmKJ6YEXV" },
          { t: "【第5】67岁老人健身教程", s: "UP主周大爷不服老发布老年锻炼主题视频，榜单抓取时播放量约352万，位列B站排行榜第5。", link: "https://www.bilibili.com/video/BV1sUKn6QEQG" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "今日抓取失败", s: "抖音热榜接口在本次抓取时出现传输连接错误，未写入未经核实的榜单内容。", link: "" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】Ryan Clark", s: "Trends24抓取的美国X趋势榜第1，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Ryan%20Clark" },
          { t: "【第2】#WWERaw", s: "Trends24抓取的美国X趋势榜第2，话题围绕WWE Raw相关内容在当地趋势列表中上升。", link: "https://twitter.com/search?q=%23WWERaw" },
          { t: "【第3】ESPN", s: "Trends24抓取的美国X趋势榜第3，体育媒体ESPN相关内容进入当地最新趋势列表。", link: "https://twitter.com/search?q=ESPN" },
          { t: "【第4】#wildcardclub", s: "Trends24抓取的美国X趋势榜第4，相关标签进入当地最新趋势列表。", link: "https://twitter.com/search?q=%23wildcardclub" },
          { t: "【第5】Bregman", s: "Trends24抓取的美国X趋势榜第5，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Bregman" }
        ]
      }
    ],
    podcasts: [
      { show: "What's Next｜科技早知道", title: "如何「兜住」一颗火箭？| S10E21", note: "本期围绕长征十号乙一子级海上网系捕获回收，讨论不同可回收火箭技术路线及商业航天的后续挑战。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/b66fdf0f-d428-4f0c-8412-b0c7581132d0.mp3", link: "https://guiguzaozhidao.fireside.fm/20240435" },
      { show: "硅谷101", title: "E244｜机器人走错路了？与苏度韩铮聊聊具身智能的3D数据、路径分野与硅谷竞赛", note: "本期关注具身智能的3D数据、技术路径分歧与硅谷竞赛，讨论机器人发展中数据和模型路线的取舍。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/fc9a3737-81a9-49cf-a7d6-530c77df836e.mp3", link: "https://sv101.fireside.fm/257" }
    ]
  },
  {
    date: "2026-07-19",
    weekday: "周日",
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "AI治理引入哲学讨论", s: "量子位报道，随着智能系统进入社会运行场景，围绕AI治理的讨论正吸收哲学视角，以处理技术应用中的规范与责任问题。", link: "https://www.qbitai.com/2026/07/455041.html" },
          { t: "WAIC展示模型“读心术”探索", s: "WAIC现场展示了以主观世界模型为线索的AI研究与产品演示，关注模型对人的状态、意图和环境信息的理解能力。", link: "https://www.qbitai.com/2026/07/455031.html" },
          { t: "国产GPU直通方案公布实测", s: "一项面向国产GPU的直通方案公布测试结果，报道提到其不依赖英伟达网卡，并比较了吞吐量和延迟等性能指标。", link: "https://www.qbitai.com/2026/07/454932.html" },
          { t: "非营利组织推进开放AI网络", s: "TechCrunch报道，非营利组织Current AI正尝试建设面向公众开放的AI网络基础设施，主张以开放方式连接AI能力与资源。", link: "https://techcrunch.com/2026/07/19/nonprofit-current-ai-is-racing-to-build-the-world-wide-web-of-ai-free-for-all/" },
          { t: "诺兰称AI可能是“特洛伊木马”", s: "导演克里斯托弗·诺兰在谈及新作时表达了对AI的警惕，认为社会在接纳相关技术时需要更审慎地看待潜在影响。", link: "https://techcrunch.com/2026/07/19/odyssey-director-christopher-nolan-calls-ai-an-obvious-trojan-horse/" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "WAIC展示健康预警与中医机器人", s: "36氪报道，安顿健康在WAIC发布生命预警表标准和七诊合参中医机器人，方案结合多类生理信号与AI辅助评估。", link: "https://36kr.com/p/3902428274427525?f=rss" },
          { t: "印奇谈智能体进入物理世界", s: "在WAIC主论坛上，印奇围绕智能体与物理世界的结合发表演讲，讨论模型能力、编程能力及产业落地的演进。", link: "https://36kr.com/p/3900439867147909?f=rss" },
          { t: "1688拟推AI时代B2B开放标准", s: "36氪汇总消息称，阿里1688宣布将在本月底推出面向AI时代的B2B交易互联互通开放标准。", link: "https://36kr.com/p/3896564485572489?f=rss" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "揭阳虐狗事件引发跨地域舆论", s: "BBC中文报道，中国揭阳虐狗事件在多地引发声援、广告投放和抵制等行动，并带动对动物保护立法的讨论。", link: "https://www.bbc.com/zhongwen/trad" },
          { t: "脱北者谈K-pop进入朝鲜", s: "多名脱北者向BBC表示，尽管存在严格限制，韩国流行音乐仍通过不同渠道进入朝鲜，并对部分民众产生影响。", link: "https://www.bbc.com/zhongwen/trad" },
          { t: "研究关注矮小双胞胎的癌症线索", s: "BBC报道，一对身高不足1.2米的双胞胎及相关研究为癌症预防研究提供线索，研究人员比较了其与同村人群的健康差异。", link: "https://www.bbc.com/zhongwen/trad" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "苹果市值重返全球第一", s: "36氪早间资讯汇总提到，苹果市值重返全球第一；同一轮市场资讯还覆盖了国内成品油价格调整等消息。", link: "https://36kr.com/p/3900449325287305?f=rss" },
          { t: "具身智能融资规模受关注", s: "36氪援引研究与行业数据称，中国具身智能市场持续扩张，2026年上半年相关融资金额和事件数量均较上年同期增长。", link: "https://36kr.com/p/3899597215745664?f=rss" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】马龙/许昕获全锦赛男双冠军", s: "知乎热榜第1，讨论马龙与许昕夺得全国乒乓球锦标赛男双冠军及本场比赛表现。", link: "https://www.zhihu.com/question/2062261231742707046" },
          { t: "【第2】于东来谈带薪年假与40小时工作制", s: "知乎热榜第2，话题聚焦每年新增带薪年假和严格执行每周40小时工作制的用工建议。", link: "https://www.zhihu.com/question/2061431899038409047" },
          { t: "【第3】西班牙对阿根廷世界杯决赛前瞻", s: "知乎热榜第3，网友讨论美加墨世界杯决赛西班牙与阿根廷的胜负走向及关键因素。", link: "https://www.zhihu.com/question/2061433680585811334" },
          { t: "【第4】宜家集中出售商场", s: "知乎热榜第4，讨论宜家出售8座商场、其中多家商场关停的资产处置及零售业变化。", link: "https://www.zhihu.com/question/2061839991072990909" },
          { t: "【第5】清华学生“过目不忘”传言", s: "知乎热榜第5，围绕清华学生中“80%过目不忘”的说法展开事实辨析和学习能力讨论。", link: "https://www.zhihu.com/question/27686348" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】订书钉演奏《千本樱》", s: "UP主不那么肝的老肝妈投稿，榜单抓取时播放量约739万。", link: "https://www.bilibili.com/video/BV13YNd6dEb9" },
          { t: "【第2】寻找卢本伟", s: "STN工作室投稿，榜单抓取时播放量约947万。", link: "https://www.bilibili.com/video/BV1oHNv6kEzB" },
          { t: "【第3】古典美声与喉音技巧融合", s: "UP主时代新声古典松子吟投稿，榜单抓取时播放量约276万。", link: "https://www.bilibili.com/video/BV1y9K364EaB" },
          { t: "【第4】苏新皓夏日运动会音乐现场", s: "UP主JUSTSU_苏新皓发布4K直拍，榜单抓取时播放量约52万。", link: "https://www.bilibili.com/video/BV1N7KL6BErW" },
          { t: "【第5】《崩坏：星穹铁道》公益第二卷", s: "崩坏星穹铁道官方投稿，榜单抓取时播放量约132万。", link: "https://www.bilibili.com/video/BV1WQKn6SEaP" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "今日抓取失败", s: "抖音热榜接口在本次抓取时发生SSL连接错误，未写入未经核实的榜单内容。", link: "" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】Good Sunday", s: "Trends24抓取的美国X趋势榜第1，反映周日问候类话题的集中讨论。", link: "https://twitter.com/search?q=Good%20Sunday" },
          { t: "【第2】#BelgianGP", s: "Trends24抓取的美国X趋势榜第2，话题指向比利时大奖赛相关讨论。", link: "https://twitter.com/search?q=%23BelgianGP" },
          { t: "【第3】#PerthSantaConcertD2", s: "Trends24抓取的美国X趋势榜第3，围绕珀斯圣诞音乐会相关内容传播。", link: "https://twitter.com/search?q=%23PerthSantaConcertD2" },
          { t: "【第4】George Russell", s: "Trends24抓取的美国X趋势榜第4，围绕F1车手乔治·拉塞尔的讨论升温。", link: "https://twitter.com/search?q=George%20Russell" },
          { t: "【第5】Tate", s: "Trends24抓取的美国X趋势榜第5，相关词条进入美国地区实时趋势列表。", link: "https://twitter.com/search?q=Tate" }
        ]
      }
    ],
    podcasts: [
      { show: "What's Next｜科技早知道", title: "如何「兜住」一颗火箭？| S10E21", note: "节目围绕长征十号乙的海上网系捕获回收，讨论不同火箭回收路径及中国航天后续看点。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/b66fdf0f-d428-4f0c-8412-b0c7581132d0.mp3", link: "https://guiguzaozhidao.fireside.fm/20240435" },
      { show: "硅谷101", title: "E244｜机器人走错路了？与苏度韩铮聊聊具身智能的3D数据、路径分野与硅谷竞赛", note: "节目讨论具身智能的3D数据、软硬件协同和仿真迁移，并邀请苏度科技CEO韩铮解析机器人操作能力。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/fc9a3737-81a9-49cf-a7d6-530c77df836e.mp3", link: "https://sv101.fireside.fm/257" }
    ]
  },
  {
    date: "2026-07-18",
    weekday: "周六",
    news: [
      {
        cat: "📢 创刊说明",
        items: [
          { t: "《每日世界》创刊号", s: "本站每天早晨自动更新：AI 前沿重点播报 + 中美要闻 + 昨日知乎/B站/抖音最热 + 热门播客，并每日轮换一篇大佬人物志。正式播报从明早开始。", link: "" }
        ]
      }
    ],
    podcasts: []
  }
];
