import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, BarChart3, BrainCircuit, Mail, MapPin, Menu, Phone, Target, Users, X } from 'lucide-react'
import './styles.css'
import TiltedCard from './components/TiltedCard'
import VariableProximity from './components/VariableProximity'
import BorderGlow from './components/BorderGlow'

const experience = [
  {
    date: '2024.08 — 至今', company: '阿里巴巴国际数字商业集团', role: '国际站客户经理', featured: true,
    intro: '负责 B2B 企业客户开发、维护及经营增长，为客户提供跨境电商数字化运营解决方案。',
    details: ['基于流量、询盘、转化率等平台数据诊断经营情况，输出运营优化建议', '制定产品布局、关键词优化、营销活动规划及数据复盘方案', '应用 QoderWork、AccioWork 等 AI 工具优化方案制作、内容整理与客户沟通'],
    result: 'AI 智能电话外呼签约 3 单金品诚企方案，并在全国平台铁军课堂分享；抖音、小红书单场新签沙龙邀约 86 家；AccioWork 大师赛区域前三，并担任 50+ 人商家培训讲师。'
  },
  { date: '2023.08 — 2024.08', company: '自主创业', role: '餐饮纯外卖店铺', intro: '独立负责外卖店铺的选品、运营、履约与经营管理，在一线商业实践中锻炼成本意识和经营者视角。' },
  { date: '2022.06 — 2023.08', company: '深圳三快网络科技有限公司（美团）', role: '外卖部门 Business Development', intro: '拓展并维护区域新老商户，解决商家与消费者问题，为经营指标和长期合作关系负责。', result: '深圳新人 PK 赛第一名；月度区域 271 考核稳定前 30%；夏季战役第三名，季度考核最高第四名。' },
  { date: '2020.06 — 2022.06', company: '作业帮教育科技有限公司', role: '辅导老师 / 组长 / 储备主管', intro: '从一线辅导到团队管理，积累目标拆解、服务沟通、人员协作与结果交付经验。', result: '连续两个季度获得约 50 人学科组第二名、第三名；第三季度晋升储备主管，独立负责 50 人团队，积累员工选、用、育、励、汰全流程管理经验，并通过数据精细化跟踪、及时纠偏和阶段复盘提升团队执行效率。' }
]

const skills = [
  { icon: Users, no: '01', title: 'B2B 客户经营', text: '理解企业客户需求，从选品指导、人员招聘、店铺搭建、运营指导、业务复盘、团队培训、经营诊断等全链路陪跑，用最新的 Agent 赋能企业，为客户增长负责。' },
  { icon: BarChart3, no: '02', title: '数据诊断与增长', text: '针对已有基础但增长遇到瓶颈的企业，通过经营诊断、数据分析和运营优化，帮助提升曝光、询盘和订单，实现业务持续增长。' },
  { icon: BrainCircuit, no: '03', title: 'AI 工具应用', text: '持续学习 ChatGPT、Codex、Hermes、GitHub 等 AI 工具，并尝试将 AI 应用于客户服务、内容生成及工作流程优化。' },
  { icon: Target, no: '04', title: '学习与抗压', text: '良好的学习能力，习惯制定切实可行的学习计划，勤于学习，能不断提高。良好的抗压能力，能够在压力下保持冷静和理性，不会因为外界因素而轻易动摇。' }
]

function Header({ open, setOpen }) {
  return <header className="header"><a className="brand" href="#home" onClick={()=>setOpen(false)}><span className="brand-desktop">Alibaba International Digital Commerce Group</span><span className="brand-mobile">Alibaba.com</span></a>
    <button className="menu" type="button" onClick={() => setOpen(!open)} aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open} aria-controls="site-navigation">{open ? <X/> : <Menu/>}</button>
    <nav id="site-navigation" className={open ? 'open' : ''}>{[['首页','home'],['关于我','about'],['工作经历','experience'],['能力优势','skills']].map(([a,b])=><a key={b} href={`#${b}`} onClick={()=>setOpen(false)}>{a}</a>)}<a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>联系我 <ArrowUpRight size={17}/></a></nav>
  </header>
}

function App() {
  const [open, setOpen] = useState(false)
  const bioRef = useRef(null)
  useEffect(() => { const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')), {threshold:.12}); document.querySelectorAll('.reveal').forEach(el=>io.observe(el)); return ()=>io.disconnect() }, [])
  return <main>
    <section className="hero" id="home">
      <div className="hero-ocean"/>
      <div className="hero-shade"/><Header open={open} setOpen={setOpen}/>
      <div className="hero-content wrap"><div className="hero-copy reveal"><h1><span className="lifted-title">让中国好生意</span><br/><em>走向全球</em></h1><p>魏明浩 · 阿里巴巴国际站客户经理</p><a className="primary" href="#contact">和我聊聊 <ArrowUpRight/></a></div><div className="hero-side"><span>SHENZHEN · CHINA</span><span>22°32′N / 114°03′E</span></div></div>

    </section>

    <section className="about section" id="about"><div className="wrap">
      <div className="section-tag reveal"><span>01</span> ABOUT</div>
      <div className="about-grid"><div className="portrait reveal"><TiltedCard imageSrc="/wei-minghao-portrait.jpg" altText="魏明浩个人照片" containerHeight="100%" containerWidth="100%" imageHeight="100%" imageWidth="100%" rotateAmplitude={7} scaleOnHover={1.04} showMobileWarning={false} showTooltip={false}/><div className="portrait-label">PORTRAIT / 2026</div></div>
        <div className="bio reveal" ref={bioRef}><h2>不只是销售<br/>更是客户<span>增长的共创者</span></h2><p className="lead"><VariableProximity label="我是阿里巴巴国际站客户经理，主要服务两类客户：一类是零外贸经验的企业，帮助他们从0到1完成国际站店铺搭建和运营；另一类是拥有成熟产品和外贸基础，但国际站运营尚未跑通的企业，通过运营优化和策略调整，帮助他们提升海外获客能力和业务增长。" fromFontVariationSettings="'wght' 400" toFontVariationSettings="'wght' 800" containerRef={bioRef} radius={90} falloff="gaussian" /></p><p><VariableProximity label="我不是一个讲平台功能、追活动政策、催客户多投放的人。我更想帮客户看清：为什么店开了、钱投了、团队也在做，但效果还是不稳定。问题到底出在品商基建、店铺承接、推广投放、询盘转化，还是团队执行。找到下一步最该优化的经营动作。" fromFontVariationSettings="'wght' 300" toFontVariationSettings="'wght' 750" containerRef={bioRef} radius={90} falloff="gaussian" /></p><p><VariableProximity label="我长期关注大模型、AI Agent 与智能办公工具。我相信好的客户经理，既要懂生意，也要懂数据，更要能把新技术真正带到客户的业务场景。" fromFontVariationSettings="'wght' 300" toFontVariationSettings="'wght' 750" containerRef={bioRef} radius={90} falloff="gaussian" /></p></div>
      </div>
      <div className="stats reveal"><div><strong>3<span>单</span></strong><p>AI 外呼签约金品诚企</p></div><div><strong>86<span>家</span></strong><p>单场新签沙龙活动邀约</p></div><div><strong>TOP 3</strong><p>AccioWork 大师赛区域排名</p></div></div>
    </div></section>

    <section className="experience section" id="experience"><div className="wrap"><div className="section-tag reveal"><span>02</span> EXPERIENCE</div><div className="section-heading reveal"><h2>一步一步<br/>走到生意<span>增长的一线</span></h2><p>从教育服务、商户拓展、独立创业，到跨境电商客户经营，每段经历都在累积我对“人、经营与结果”的理解。</p></div>
      <div className="timeline">{experience.map((item,i)=><article className={`job reveal ${item.featured?'featured':''}`} key={item.date}><div className="job-index">0{i+1}</div><time>{item.date}</time><div className="job-main"><div className="job-title"><h3>{item.role}</h3><span>{item.company}</span></div><p>{item.intro}</p>{item.details&&<ul>{item.details.map(x=><li key={x}>{x}</li>)}</ul>}{item.result&&<div className="result"><b>关键成绩</b>{item.result}</div>}</div></article>)}</div>
    </div></section>

    <section className="skills section" id="skills"><div className="wrap"><div className="section-tag reveal"><span>03</span> CAPABILITIES</div><div className="skills-head reveal"><h2>把复杂问题<br/>变成<span>确定行动</span></h2><p>能力不是标签，而是在每一次真实业务现场里，持续被验证的方法。</p></div><div className="skill-grid">{skills.map(({icon:Icon,...s})=><article className="skill reveal" key={s.no}><div><span>{s.no}</span><Icon/></div><h3>{s.title}</h3><p>{s.text}</p><div className="skill-line"/></article>)}</div></div></section>

    <section className="contact" id="contact"><div className="contact-bg"/><div className="wrap contact-wrap"><div className="section-tag reveal"><span>04</span> CONTACT</div><div className="contact-copy reveal"><p>下一段增长，从一次真诚的交流开始。</p><h2>期待与你<br/><em>合作</em></h2></div><div className="contact-socials reveal"><BorderGlow className="social-glow" edgeSensitivity={18} glowColor="18 100 38" backgroundColor="#070b0d" borderRadius={22} glowRadius={36} glowIntensity={1.8} coneSpread={30} animated={true} colors={["#7a2400", "#641b22", "#07384a"]} fillOpacity={0.32}><img src="/social-accounts-combined.png" alt="抖音、小红书和视频号账号二维码"/></BorderGlow></div><div className="contact-socials-mobile reveal" role="region" aria-label="抖音、小红书和视频号二维码">{['抖音二维码','小红书二维码','视频号二维码'].map((label, index)=><div className={`social-mobile-card social-mobile-card-${index + 1}`} key={label}><img src="/social-accounts-combined.png" alt={label}/></div>)}</div><div className="contact-actions reveal"><a href="tel:18594204546"><span>电话</span><b>185 9420 4546</b><ArrowUpRight/></a><a href="mailto:10615961@qq.com"><span>邮箱</span><b>10615961@qq.com</b><ArrowUpRight/></a></div><footer><span>© 2026 WEI MINGHAO</span><span>ALIBABA.COM ACCOUNT MANAGER · SHENZHEN</span></footer></div></section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
