import BackToTop from "./components/Scroll";

export default function App() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0d0d0d, #1a1a1a)",
        color: "#eee",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
        minHeight: "100vh",
        lineHeight: "1.6",
        textAlign: "center"
       
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", color: "#00d4ff" }}>
        React + TypeScript Intro
      </h1>

      <p style={{  textAlign: "center" }}>
        React is a <span style={{ color: "#ff9800",textAlign: "justify" }}>JavaScript library</span>{" "}
        for building user interfaces. It allows developers to create reusable UI
        components that update efficiently when data changes.
      </p>

      <p>
        TypeScript is a{" "}
        <span style={{ color: "#4caf50", textAlign: "justify" }}>superset of JavaScript</span> that
        adds static typing. It helps catch errors during development and
        improves code readability and maintainability.
      </p>

      <p>
        Together, <strong style={{ color: "#00d4ff" }}>React</strong> and{" "}
        <strong style={{ color: "#ff9800" }}>TypeScript</strong> form a powerful
        combination for modern web development.
      </p>

      {/* Dummy scrollable section */}
      <div style={{ height: "1500px", marginTop: "40px" }}>
        <h2 style={{ textAlign: "center", color: "#36f443ff" }}>
          Scroll down to see Back To Top button
        </h2>
        <p style={{ maxWidth: "700px", margin: "20px auto", textAlign: "justify" }}>
          TypeScript is also a programming language that preserves the runtime behavior of JavaScript. For example, dividing by zero in JavaScript produces Infinity instead of throwing a runtime exception. As a principle, TypeScript never changes the runtime behavior of JavaScript code.

          This means that if you move code from JavaScript to TypeScript, it is guaranteed to run the same way, even if TypeScript thinks that the code has type errors.
          <br /> <br />
          Keeping the same runtime behavior as JavaScript is a foundational promise of TypeScript because it means you can easily transition between the two languages without worrying about subtle differences that might make your program stop working.

          Erased Types
          Roughly speaking, once TypeScript’s compiler is done with checking your code, it erases the types to produce the resulting “compiled” code. This means that once your code is compiled, the resulting plain JS code has no type information.

          This also means that TypeScript never changes the behavior of your program based on the types it inferred. The bottom line is that while you might see type errors during compilation, the type system itself has no bearing on how your program works when it runs.
          <br /> <br />
          Finally, TypeScript doesn’t provide any additional runtime libraries. Your programs will use the same standard library (or external libraries) as JavaScript programs, so there’s no additional TypeScript-specific framework to learn.
        </p>
      </div>

      <BackToTop />
    </div>
  );
}
