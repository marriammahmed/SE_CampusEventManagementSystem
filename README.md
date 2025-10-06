<h1>Campus Event Management System — Microservices Architecture</h1>

<h2>Description</h2>
This extracurricular project was developed as part of the <b>Software Engineering</b> course and extended through independent exploration using <b>AI-assisted development tools</b>.  
The goal was to design and prototype a <b>Campus Event Management System</b> based on a <b>microservices architecture</b>, emphasizing scalability, modularity, and team collaboration within an Agile/Scrum framework.  

The system was structured around two core services:  
1. <b>Event Service</b> — responsible for event creation, updates, and storage.  
2. <b>Registration Service</b> — responsible for managing attendee registration and participation data.  

To maintain independence, each microservice was assigned its own database. This setup improved scalability and fault tolerance but initially introduced data isolation issues. The solution implemented <b>API-based inter-service communication</b> to synchronize data and ensure consistency between the Event and Registration services.  
<br /><br />

<h2>Course Outcomes & Skills</h2>
This course developed foundational and applied competencies in software engineering processes, tools, and system architecture.  
Key technical and professional skills demonstrated include:  

- <b>Software Development Life Cycle (SDLC):</b> Applied full-cycle development from requirements gathering and design to implementation, testing, and maintenance.  
- <b>Agile & Scrum Methodologies:</b> Conducted sprint-based iterations, daily stand-ups, backlog management, and retrospective analysis.  
- <b>UML Modeling:</b> Created <b>use case, class, and sequence diagrams</b> to visualize workflows and service interactions.  
- <b>Microservices Architecture Design:</b> Designed independent services with isolated databases and implemented <b>API-based inter-service communication</b> for event and registration management.  
- <b>Version Control & Collaboration:</b> Utilized <b>Git and GitHub</b> for collaborative version tracking, branching, and merging.  
- <b>Continuous Integration/Continuous Deployment (CI/CD):</b> Applied basic CI/CD workflows for code testing, build automation, and deployment.  
- <b>Testing & Documentation:</b> Wrote detailed documentation and employed basic unit and integration testing to validate service interactions.  
- <b>AI-Augmented Development:</b> Used AI tools to assist in generating UML diagrams, backend service logic, and API design optimization.  

💡 *This project demonstrates strong analytical thinking, familiarity with distributed system design, and modern software engineering practices essential for scalable backend and full-stack development roles.*
<br /><br />

<h2>Project Detail Guideline</h2>
1. Identify system requirements and define user stories. <br />
2. Design UML diagrams (use case, class, sequence). <br />
3. Develop the <b>Event Service</b> and <b>Registration Service</b> as independent APIs. <br />
4. Configure separate databases for each microservice. <br />
5. Implement API-based inter-service communication to synchronize data. <br />
6. Test and document workflows under Agile iterations. <br />
<br />

<h2>Languages, Tools, and Environments Used</h2>
- <b>Languages:</b> JavaScript / Python (for APIs), SQL  <br />
- <b>Frameworks:</b>Flask (prototype services)  <br />
- <b>Architecture:</b> RESTful Microservices  <br />
- <b>Tools:</b> Git, GitHub, Postman, UML tools (draw.io / Lucidchart)  <br />
- <b>DevOps:</b> CI/CD (GitHub Actions)  <br />
- <b>AI Tools:</b> ChatGPT, Copilot (for rapid prototyping and UML generation)  <br />
<br />

<h2>Program Walk-through (Photos)</h2>
<p align="center">
Microservices Architecture: <br/>
<img src="https://i.imgur.com/y4aRQT3.png" width="80%" alt="Use Case Diagram"/><br/><br/>
Home Page: <br/>
<img src="https://i.imgur.com/6lEcA8C.png" width="80%" alt="Class Diagram"/><br/><br/>
User interface: <br/>
<img src="https://i.imgur.com/Vu0fYz4.png" width="80%" alt="Class Diagram"/><br/><br/>
Admin Inetrface: <br/>
<img src="https://i.imgur.com/oDKgZdW.png width="80%" alt="Class Diagram"/><br/><br/>
Event Creation Interface (prototype): <br/>
<img src="https://i.imgur.com/aRVxVed.png" width="80%" alt="Event Creation UI"/><br/><br/>
</p>
