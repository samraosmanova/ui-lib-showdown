export default function App() {
  return (
    <div
      style={{
        height: "98vh",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{padding:20}}>
        <h4>Embedding via iframe</h4>
        <p>
          Example usage by merchant supposing that they will pass dynamically generated{" "}
          <code style={{ color: "blue" }}>session</code> or{" "}
          <code style={{ color: "blue" }}>token</code> as <code style={{ color: "blue" }}>src</code>{" "}
          attribute.
        </p>
        <pre
          style={{
            background: "black",
            color: "white",
            padding: "20px",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          <span style={{ color: "lightblue" }}>&lt;iframe</span>
          <br />
          &nbsp;&nbsp;
          <span style={{ color: "orange" }}>title=</span>
          <span style={{ color: "lightgreen" }}>"BP Checkout Page"</span>
          <br />
          &nbsp;&nbsp;
          <span style={{ color: "orange" }}>src=</span>
          <span style={{ color: "yellow" }}>"URL_WITH_TOKEN"</span>
          <br />
          <span style={{ color: "lightblue" }}>/&gt;</span>
        </pre>
        <p> Embedding payment forms via iFrames can create a seamless user experience by keeping
        customers on the original website. However, this approach comes with several challenges.</p>
        <ul>
          <li>We may experience difficulties with loading some Click2Pay scripts</li>
          <li>
            iFrames can cause content to break or display incorrectly, especially on mobile devices,
            leading to a suboptimal user experience. Nevertheless having responsive design could
            solve this issue.
          </li>
          <li>
            Browsers like Safari have security limitations with iFrames, such as discarding cookies,
            which can affect payment processing. Having appropriate security headers may solve this
            issue.
          </li>
        </ul>
        <a href="https://support.trekksoft.com/5-reasons-to-better-not-use-iframe-integration-in-your-website?utm_source=chatgpt.com">
          Reference
        </a>
      </div>
      <iframe
        title="BP Checkout Page"
        width="100%"
        height="100%"
        style={{ border: "none", borderLeft: "1px dashed #5850ec" }}
        src="https://testapi.betterpayment.de/rest/checkouts/23db5d5d-2d93-466b-8c31-48a645840d76"
      />
    </div>
  );
}
