// pages/services.tsx
import Head from 'next/head';
import '../public/style.css'; // Or use `import '../styles/style.css'` if placed in /styles

const Services: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Best Services</title>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/style.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="services-section">
        <div className="container">
          <h1>Our Best Services</h1>
          <p className="subtitle">
            Information Technology is a rapidly evolving field that encompasses the study and
            application of computing technology to solve complex problems
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="icon">🖥️</div>
              <h2>Tech Fortress Solutions</h2>
              <p>
                Information Technology is a rapidly evolving field that encompasses the study and
                application
              </p>
              <a href="#">Read More →</a>
            </div>

            <div className="service-card">
              <div className="icon">📊</div>
              <h2>Data Sphere Innovations</h2>
              <p>
                Information Technology is a rapidly evolving field that encompasses the study and
                application
              </p>
              <a href="#">Read More →</a>
            </div>

            <div className="service-card">
              <div className="icon">🛡️</div>
              <h2>Cyber Pulse Security</h2>
              <p>
                Information Technology is a rapidly evolving field that encompasses the study and
                application
              </p>
              <a href="#">Read More →</a>
            </div>

            <div className="service-card">
              <div className="icon">🌐</div>
              <h2>Net Vantage Systems</h2>
              <p>
                Information Technology is a rapidly evolving field that encompasses the study and
                application
              </p>
              <a href="#">Read More →</a>
            </div>

            <div className="service-card">
              <div className="icon">🧠</div>
              <h2>Code Nova Technologies</h2>
              <p>
                Information Technology is a rapidly evolving field that encompasses the study and
                application
              </p>
              <a href="#">Read More →</a>
            </div>

            <div className="service-card call-box">
              <div className="icon-call">📞</div>
              <h2>Need Help?</h2>
              <p>Speak with our experts directly to explore your next solution.</p>
              <a href="#">Contact Us →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
