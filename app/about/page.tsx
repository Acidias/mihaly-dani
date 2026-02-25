import Link from "next/link";

export const metadata = {
  title: "About – Mihaly Dani",
  description: "My story – from Serbia to the UK, night shifts to Stanford, and building things that matter.",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <header className="mb-12">
        <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold text-neutral-900 mt-4 mb-1">
          My Story
        </h1>
        <p className="text-neutral-500">
          From Serbia to the UK, night shifts to Stanford, and building things that matter.
        </p>
      </header>

      <hr className="border-neutral-200 mb-10" />

      <article className="space-y-10">
        <section>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I grew up in a small town in Serbia, helping in my family&apos;s hospitality business from a young age. Not a summer job. Years of it. Serving guests, cooking, cleaning, preparing rooms, whatever the day needed. My parents taught me the things that matter most: work hard, stay humble, show up even when you don&apos;t feel like it. I carry that with me everywhere.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            My parents aren&apos;t from a technical or academic background. Nobody in my family had gone to university before me. Coding, building apps, startups, none of that existed in my world growing up. I found it on my own, got curious, and taught myself piece by piece.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">The move</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            In 2020, COVID hit and the world stopped. But I made a decision that changed my life: I moved from Serbia to the UK. It was spontaneous and a bit crazy. I had no real plan, no safety net, no connections. I just knew I wanted more, and I was willing to bet on myself.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I landed in a new country with almost nothing and immediately started working night shifts at Ocado as a Personal Shopper. 10 to 12 hour shifts, usually 4 days a week, sometimes more when overtime was available. The money was stable but the hours were brutal on the body.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            At the same time, I was studying Computer Science full-time at the University of Hertfordshire. So my life looked like this: work all night, sleep a few hours, go to lectures, study, repeat. There was no weekend. There was no &quot;off mode.&quot;
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">The wake-up call</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            My grades started slipping. And that hurt, because I knew I wasn&apos;t stupid. I knew I could do this. The problem was how I managed my time, energy, and priorities. I was trying to do everything and doing nothing well.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            That moment forced me to change. I became obsessive about systems: time blocks, sleep schedules, clear daily priorities, realistic weekly goals. I stopped relying on motivation and started relying on structure. Slowly, everything turned around.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            In my first year, I won a Santander Scholarship. 10,000 pounds per year, for three years. Around 100 students across the entire UK received it. When I got that email, I sat there for a while just staring at my screen. For someone who moved to a new country with almost nothing, that felt like proof: if you stay consistent, things happen.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            I graduated with First Class Honours.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">Building products</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            On the days I wasn&apos;t doing night shifts, I didn&apos;t rest like a normal person. I took a part-time programming job. It started with small automation scripts for a company. But my brain doesn&apos;t stop at the task in front of me. I always think: what&apos;s the bigger system here? How can this become a real product that helps more people?
          </p>
          <p className="text-neutral-700 leading-relaxed">
            So I pitched an idea. A database and zero-code application platform. Something scalable, something that solves a category of problems, not one internal task. And we actually built it. That was a defining moment for me. I see leverage in work. I see how small things can become big things. That&apos;s how my mind works.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">Stanford</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Going to America was always a far away dream for me. Studying at a place like Stanford? I didn&apos;t even dare to say out loud how much I wanted it.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Then I found the Stanford Summer Session and I applied. Even the 100 dollar application fee felt heavy at the time. The full cost was around 18,000 dollars for tuition and accommodation, plus flights, plus living expenses. Numbers that made no sense for someone like me.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            But I applied anyway. And I got in. Only around 550 people worldwide are accepted. Then something even more unbelievable happened: I received a merit-based scholarship. Only about 40 people got that.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Stanford was incredible. In Technology Entrepreneurship, our team had serious conflict. Different egos, different goals, people wanting to build a unicorn in two months. I kept pushing the team to stay together, focus, finish the project properly, and enjoy the experience. We did. We got A grades.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            In Data Science, I worked with two younger teammates on stock market sentiment analysis. We didn&apos;t find reliable correlation in the end, but our sentiment model was strong and our presentation was even stronger. We scored 100 out of 90 points.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Beyond the classes, I made real friends there. People I still talk to regularly. Probably for life.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">AI Research</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            After Stanford, I came back to the UK, back to my normal life, back to the same question: what&apos;s next?
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I went deep into AI research. My main focus became fall detection. Real videos, massive datasets (hundreds of gigabytes), two camera angles, 18 frames per second, optical flow, pose estimation. This is safety-critical work, building systems that can detect when someone falls in their home and alert help. It matters because people&apos;s lives depend on it.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I learned that in real AI projects, data quality is everything. If your dataset is messy, your model is lying to you. So I spent serious time cleaning data, validating pipelines, comparing approaches. I also started generating synthetic training data using VAEs and VQ-VAEs, experimenting with skip connections and different training mixes. I even interpolated videos from 18fps to 36fps using RIFE and improved accuracy by around 5%. That kind of gain doesn&apos;t come from luck. It comes from understanding the full system and being patient with the details.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">Trust and agency</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I also care deeply about deepfake detection and AI-generated content. I don&apos;t like where the internet is heading. I think in the future, financial gaps between people will shrink. But dopamine gaps will grow. More people will be addicted to cheap, AI-generated content. Attention will be constantly under attack.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            For me, agency is the real moat. If you can&apos;t control your own attention, you lose. And the tools to steal it are getting better every day. That&apos;s why I want to build things that protect truth and trust, not erode them.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">Who I am today</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I build products because I believe in shipping. Web apps, automation tools, analytics platforms, things that reduce complexity and actually work. If something feels too heavy or overcomplicated, my instinct is to build a cleaner version.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I care about structure. I care about growth. Mentors and communities have shaped me. I&apos;m trying to become someone who carries real responsibility, not someone who chases goals and moves on.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            If I had to describe my life in one line: I moved to a new country with nothing, worked night shifts, studied full-time, rebuilt my discipline from the ground up, and kept building toward things that actually matter. That&apos;s the story. And it&apos;s still being written.
          </p>
        </section>
      </article>

      <hr className="border-neutral-200 mt-12 mb-8" />

      <footer className="flex justify-between items-center text-sm text-neutral-400">
        <Link href="/" className="hover:text-neutral-600 transition-colors">← Home</Link>
        <span>&copy; {new Date().getFullYear()} Mihaly Dani</span>
      </footer>
    </main>
  );
}
