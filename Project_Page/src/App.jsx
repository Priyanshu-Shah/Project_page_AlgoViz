import { useRef } from 'react';
import './App.css';

function App() {
  const imagesScrollRef = useRef(null);
  const algoScrollRef = useRef(null); 

  const scrollLeft = () => {
    if (imagesScrollRef.current) {
      imagesScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (imagesScrollRef.current) {
      imagesScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollAlgoLeft = () => {
    if (algoScrollRef.current) {
      algoScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollAlgoRight = () => {
    if (algoScrollRef.current) {
      algoScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="project-container">
      <header className="project-header">
        <div className="header-content">
          <h1>AlgoViz: Machine Learning Algorithm Visualizer</h1>
          <div className="author-info">
            <p>
              <strong>Contributors:</strong> 
              <a href="https://github.com/darshpatel1052" target="_blank" rel="noopener noreferrer"> Darsh Patel</a>,
              <a href="https://github.com/Priyanshu-Shah" target="_blank" rel="noopener noreferrer"> Priyanshu Shah</a>,
              <a href="https://github.com/ChanchalYadav12" target="_blank" rel="noopener noreferrer"> Chanchal Yadav</a>,
              <a href="https://github.com/BhargavShekokar3425" target="_blank" rel="noopener noreferrer"> Bhargav Shekokar</a>,
              <a href="https://github.com/ArunCS1005" target="_blank" rel="noopener noreferrer"> Arun Kumar</a>,
              <a href="https://github.com/Asinat123" target="_blank" rel="noopener noreferrer"> Tanisha Saini</a>
            </p>
            <div className="project-links">
              <a href="https://github.com/Priyanshu-Shah/AlgoViz" target="_blank" rel="noopener noreferrer" className="button">Project Repository</a>
              <a href="https://algovizz.web.app" target="_blank" rel="noopener noreferrer" className="button">Live Website</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="overview-section">
          <h2>Overview</h2>
          <p>
          AlgoViz is an interactive tool designed to make machine learning (ML) algorithms more accessible and comprehensible through 
          dynamic visualizations. The platform enables users to explore, modify, and visualize the behavior of various ML algorithms 
          in real time. It supports supervised learning algorithms like Polynomial Regression, K-Nearest Neighbors (KNN), Decision 
          Trees, Support Vector Machines (SVM), and Artificial Neural Networks (ANN), as well as unsupervised techniques such as K-Means 
          Clustering, DBSCAN, and Principal Component Analysis (PCA). By offering features like real-time parameter tuning and guided tutorials, AlgoViz creates an immersive and engaging learning experience for users ranging from 
          beginners to advanced practitioners. This report outlines the development process, architecture, implemented algorithms, 
          interactive features, and future scope of the project.
          </p>
        </section>

        <section className="images-section">
          <h2>Images</h2>
          <div className="images-gallery-container">
            <button className="scroll-button left" onClick={scrollLeft}>&#10094;</button>
            <div className="images-gallery" ref={imagesScrollRef}>
              <div className="gallery-item">
                <img src="images/dec-tree.jpg" alt="Decision Tree Visualization" />
                <p>Decision Tree Points</p>
              </div>
              <div className="gallery-item">
                <img src="images/dec-tree-bound.jpg" alt="Decision Tree Visualizati" />
                <p>Decision Tree Boundary</p>
              </div>
              <div className="gallery-item">
                <img src="images/dec_tree.jpg" alt="Decision Tree Visualition" />
                <p>Decision Tree</p>
              </div>
              <div className="gallery-item">
                <img src="images/ann.jpg" alt="Neural Network Visualation" />
                <p>Neural Network Points</p>
              </div>
              <div className="gallery-item">
                <img src="images/ann-net.jpg" alt="Neural Network Visualization" />
                <p>Neural Network</p>
              </div>
              <div className="gallery-item">
                <img src="images/knn.jpg" alt="K-Means Cluering" />
                <p>KNN Points</p>
              </div>
              <div className="gallery-item">
                <img src="images/knn2.jpg" alt="K-Mes Clustering" />
                <p>KNN outcome</p>
              </div>
              <div className="gallery-item">
                <img src="images/k-means-bef.jpg" alt="K-Means Clustering" />
                <p>K-Means Points</p>
              </div>
              <div className="gallery-item">
                <img src="images/k-means.jpg" alt="K-Means Clring" />
                <p>K-Means Clustering</p>
              </div>
              <div className="gallery-item">
                <img src="images/svm-before.jpg" alt="SVM Claification" />
                <p>SVM Points</p>
              </div>
              <div className="gallery-item">
                <img src="images/svm.jpg" alt="SVM Classification" />
                <p>SVM Classification</p>
              </div>
              <div className="gallery-item">
                <img src="images/pca.jpg" alt="pca" />
                <p>PCA projection</p>
              </div>
              <div className="gallery-item">
                <img src="images/poly-reg.jpg" alt="poly reg" />
                <p>Polynomial regression points</p>
              </div>
              <div className="gallery-item">
                <img src="images/poly-reg-res.jpg" alt="pol reg" />
                <p>Polynomial regression result</p>
              </div>
              <div className="gallery-item">
                <img src="images/dbscan-before.jpg" alt="dbsc" />
                <p>DBScan Points</p>
              </div>
              <div className="gallery-item">
                <img src="images/dbscan-after.jpg" alt="dbb" />
                <p>DBScan output</p>
              </div>
            </div>
            <button className="scroll-button right" onClick={scrollRight}>&#10095;</button>
          </div>
        </section>

        <section className="deliverables-section">
          <h2>Project Deliverables</h2>
          <div className="deliverables-grid">
            <div className="deliverable-item">
              <h3>Project Report</h3>
              <p>Comprehensive documentation of the project including methodology, architecture, algorithms, and evaluation.</p>
              <a href="/project-report.pdf" target="_blank" rel="noopener noreferrer" className="button">View Report</a>
            </div>
            
            <div className="deliverable-item">
              <h3>Source Code Repository</h3>
              <p>Complete codebase including frontend, backend, and algorithm implementations.</p>
              <a href="https://github.com/Priyanshu-Shah/AlgoViz" target="_blank" rel="noopener noreferrer" className="button">GitHub Repo</a>
            </div>
            
            <div className="deliverable-item">
              <h3>Demo Video</h3>
              <p>Walkthrough demonstration of the AlgoViz platform and its key features.</p>
              <a href="https://youtu.be/5Cre37hI_L0" target="_blank" rel="noopener noreferrer" className="button">Watch Demo</a>
            </div>
            
            <div className="deliverable-item">
              <h3>Live Website</h3>
              <p>Interactive web application with all implemented algorithms and visualizations.</p>
              <a href="https://algovizz.web.app" target="_blank" rel="noopener noreferrer" className="button">Visit Website</a>
            </div>
            
            <div className="deliverable-item">
              <h3>Spotlight Video</h3>
              <p>A concise overview of the project highlighting its innovation and impact.</p>
              <a href="https://youtu.be/tQl1dH-tbdw" target="_blank" rel="noopener noreferrer" className="button">Watch Spotlight</a>
            </div>
            
            <div className="deliverable-item">
              <h3>Meeting Minutes</h3>
              <p>Documentation of team meetings, decisions, and progress throughout the project timeline.</p>
              <a href="/mom.pdf" target="_blank" rel="noopener noreferrer" className="button">View Minutes</a>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Team & Contributions</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>Darsh Patel</h3>
              <p className="member-role">Frontend and Backend development</p>
              <ul className="member-contributions">
                <li>Project architecture and coordination</li>
                <li>Decision tree visualization and SVM implementation</li>
                <li>API development for algorithm execution</li>
              </ul>
              <div className="member-links">
                <a href="https://github.com/darshpatel1052" target="_blank" rel="noopener noreferrer" className="member-link">GitHub Profile  </a>
                <a href="https://linkedin.com/in/darshpatel52" target="_blank" rel="noopener noreferrer" className="member-link">LinkedIn</a>
              </div>
            </div>
            
            <div className="team-member">
              <h3>Priyanshu Shah</h3>
              <p className="member-role">Frontend and Backend Development</p>
              <ul className="member-contributions">
                <li>Neural network and PCA implementation and visualization</li>
                <li>Algorithm optimization and performance tuning</li>
                <li>Data preprocessing utilities</li>
              </ul>
              <div className="member-links">
                <a href="https://github.com/Priyanshu-Shah" target="_blank" rel="noopener noreferrer" className="member-link">GitHub Profile  </a>
                <a href="https://linkedin.com/in/priyanshu-v-shah" target="_blank" rel="noopener noreferrer" className="member-link">LinkedIn</a>
              </div>
            </div>

            <div className="team-member">
              <h3>Chanchal Yadav</h3>
              <p className="member-role">Frontend Developer</p>
              <ul className="member-contributions">
                <li>Documentation and homepage design</li>
                <li>K-means clustering implementation</li>
                <li>UI/UX design and responsiveness</li>
              </ul>
              <div className="member-links">
              <a href="https://github.com/ChanchalYadav12" target="_blank" rel="noopener noreferrer" className="member-link">GitHub Profile  </a>
              <a href="https://linkedin.com/in/chanchal-yadav-00632228b" target="_blank" rel="noopener noreferrer" className="member-link">LinkedIn</a>
              </div>
            </div>

            <div className="team-member">
              <h3>Bhargav Shekhokar</h3>
              <p className="member-role">Backend Development</p>
              <ul className="member-contributions">
                <li>KNN and DBScan implementation</li>
                <li>Animation and transition effects</li>
                <li>Cross-browser compatibility</li>
              </ul>
              <div className="member-links">
                <a href="https://github.com/BhargavShekokar3425" target="_blank" rel="noopener noreferrer" className="member-link">GitHub Profile  </a>
                <a href="https://linkedin.com/in/bhargav-shekokar" target="_blank" rel="noopener noreferrer" className="member-link">LinkedIn</a>
              </div>
            </div>

            <div className="team-member">
              <h3>Arun Kumar</h3>
              <p className="member-role">Backend Development</p>
              <ul className="member-contributions">
                <li>SVM and PCA implementations</li>
                <li>Performance metrics calculation</li>
                <li>Sample dataset curation</li>
              </ul>
              <div className="member-links">
                <a href="https://github.com/ArunCS1005" target="_blank" rel="noopener noreferrer" className="member-link">GitHub Profile  </a>
                <a href="https://linkedin.com/in/arun-kumar-936847298" target="_blank" rel="noopener noreferrer" className="member-link">LinkedIn</a>
              </div>
            </div>

            <div className="team-member">
              <h3>Tanisha Saini</h3>
              <p className="member-role">Frontend Development and Documentation</p>
              <ul className="member-contributions">
                <li>Technical documentation and tutorials</li>
                <li>Testing and quality assurance</li>
                <li>Polynomial regression implementation</li>
              </ul>
              <div className="member-links">
                <a href="https://github.com/Asinat123" target="_blank" rel="noopener noreferrer" className="member-link">GitHub Profile  </a>
                <a href="https://linkedin.com/in/tanisha-saini-222791289" target="_blank" rel="noopener noreferrer" className="member-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        <section className="algorithms-section">
          <h2>Supported Algorithms</h2>

          <button className="algo-scroll-button left" onClick={scrollAlgoLeft}>&#10094;</button>
          <div className="algorithm-container" ref={algoScrollRef}> 
            <div className="algorithm-card">
              <h3>Linear & Polynomial Regression</h3>
              <div className="algorithm-content">
                <div className="algorithm-description">
                  <p>
                    Visualize how regression models fit lines or curves to data points, demonstrating the fundamental 
                    concept of predictive modeling.
                  </p>
                  <ul className="algorithm-features">
                    <li>Interactive map for data point placement and visualization</li>
                    <li>Sample datasets for quick experimentation</li>
                    <li>Adjustable hyperparameters: learning rate, iterations, polynomial degree</li>
                    <li>Real-time visualization of the training process showing how the regression line evolves</li>
                    <li>Performance metrics including MSE and R² scores</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="algorithm-card">
              <h3>K-Nearest Neighbors (KNN)</h3>
              <div className="algorithm-content">
                <div className="algorithm-description">
                  <p>
                    Explore the instance-based learning approach where classification is determined by proximity to neighboring points.
                  </p>
                  <ul className="algorithm-features">
                    <li>Interactive map for placing data points across three different classes</li>
                    <li>Adjustable number of neighbors parameter</li>
                    <li>Two operational modes: training and prediction</li>
                    <li>Visualization of decision boundaries between classes</li>
                    <li>Support for both classification and regression tasks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="algorithm-card">
              <h3>Decision Trees</h3>
              <div className="algorithm-content">
                <div className="algorithm-description">
                  <p>
                    Understand the hierarchical splitting process that creates tree-like models for classification and regression.
                  </p>
                  <ul className="algorithm-features">
                    <li>Interactive map for data point placement</li>
                    <li>Configurable parameters: tree depth, minimum samples for split, entropy type</li>
                    <li>Training and prediction modes</li>
                    <li>Support for three-class classification problems</li>
                    <li>Visual representation of decision boundaries</li>
                    <li>Tree structure visualization showing split criteria at each node</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="algorithm-card">
              <h3>Support Vector Machines (SVM)</h3>
              <div className="algorithm-content">
                <div className="algorithm-description">
                  <p>
                    Visualize how SVMs find optimal hyperplanes to separate data classes with maximum margin.
                  </p>
                  <ul className="algorithm-features">
                    <li>Interactive map for data point placement</li>
                    <li>Multiple kernel options: linear, polynomial, RBF</li>
                    <li>Adjustable parameters: margin width, gamma, C value</li>
                    <li>Training and prediction modes</li>
                    <li>Visualization of decision boundaries with margin highlighting</li>
                    <li>Support vector identification and display</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="algorithm-card">
              <h3>Artificial Neural Networks (ANN)</h3>
              <div className="algorithm-content">
                <div className="algorithm-description">
                  <p>
                    Explore the architecture and training process of neural networks through an interactive visualization.
                  </p>
                  <ul className="algorithm-features">
                    <li>Interactive map with sample input data</li>
                    <li>Complete neural network architecture visualization</li>
                    <li>Configurable parameters: learning rate, batch size, epochs</li>
                    <li>Customizable network structure: hidden layers, neurons per layer, activation functions</li>
                    <li>Support for three-class classification problems</li>
                    <li>Decision boundary visualization that updates during training</li>
                    <li>Individual neuron visualizations showing feature transformations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="algorithm-card">
              <h3>K-Means Clustering</h3>
              <div className="algorithm-content">
                <div className="algorithm-description">
                  <p>
                    Watch how points are grouped into clusters through an iterative centroid-based approach.
                  </p>
                  <ul className="algorithm-features">
                    <li>Interactive map for data point placement</li>
                    <li>Adjustable number of clusters (K)</li>
                    <li>Step-by-step visualization of cluster formation across iterations</li>
                    <li>Centroid movement tracking</li>
                    <li>Cluster assignment visualization</li>
                    <li>Inertia and silhouette score metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="algorithm-card">
              <h3>DBSCAN Clustering</h3>
              <div className="algorithm-content">
                <div className="algorithm-description">
                  <p>
                    Explore density-based clustering that can discover clusters of arbitrary shapes.
                  </p>
                  <ul className="algorithm-features">
                    <li>Interactive map for data point placement</li>
                    <li>Adjustable parameters: epsilon (neighborhood distance), minimum points</li>
                    <li>Visual identification of core points, border points, and noise points</li>
                    <li>Epsilon radius visualization</li>
                    <li>Cluster formation animation</li>
                    <li>Handling of irregularly shaped clusters</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="algorithm-card">
              <h3>Principal Component Analysis (PCA)</h3>
              <div className="algorithm-content">
                <div className="algorithm-description">
                  <p>
                    Understand dimensionality reduction by visualizing how PCA identifies principal components.
                  </p>
                  <ul className="algorithm-features">
                    <li>Interactive map for data point placement</li>
                    <li>Sample datasets with varying distributions</li>
                    <li>Principal component visualization</li>
                    <li>Projection of points onto principal components</li>
                    <li>Eigenvalues and eigenvectors display</li>
                    <li>Covariance matrix visualization</li>
                    <li>Explained variance analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button className="algo-scroll-button right" onClick={scrollAlgoRight}>&#10095;</button>
        </section>

        <section className="deployment-section">
          <h2>Architecture & Deployment</h2>
          <div className="deployment-content">
            <div className="deployment-info">
              <div className="deployment-card">
                <h3>Frontend</h3>
                <p><strong>Technology Stack:</strong> React.js, D3.js for visualizations, Material UI, recharts</p>
                <p><strong>Deployment:</strong> Firebase Hosting</p>
                <ul>
                  <li>Responsive interface that works across devices</li>
                  <li>Client-side algorithm execution for immediate feedback</li>
                  <li>Dynamic data visualization components</li>
                  <li>Progressive Web App capabilities for offline usage</li>
                </ul>
              </div>
              
              <div className="deployment-card">
                <h3>Backend</h3>
                <p><strong>Technology Stack:</strong> Flask, Graphviz, sklearn (only necessary), numpy, pandas</p>
                <p><strong>Deployment:</strong> Docker, Google Cloud Admin Run</p>
                <ul>
                  <li>Used cloud points provided on educational account</li>
                  <li>Auto-scaling infrastructure to handle traffic spikes</li>
                  <li>RESTful API for algorithm execution</li>
                  <li>Algorithm logic self implemented in Python</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="acknowledgments-section">
          <h2>Acknowledgments</h2>
          <p>
            We extend our heartfelt gratitude to our professor, Dr. Anand Mishra, for his invaluable guidance, mentorship, and support throughout the development of this project. His expertise and encouragement have been instrumental in shaping the vision and execution of AlgoViz.
          </p>
          <p>
            We also wish to thank our peers and mentors for their constructive feedback, insightful suggestions, and unwavering support, which have greatly contributed to the success of this project. Their collaboration and encouragement have been a source of inspiration.
          </p>
          <p>
            A special thanks to the open-source community for providing the libraries, tools, and resources that made this project possible. The contributions of countless developers and researchers have been pivotal in enabling us to build a robust and feature-rich platform.
          </p>
          <p>
            Lastly, we are deeply grateful for the cloud credits provided by Dr. Mishra, which allowed us to deploy and scale our application seamlessly. This support has been critical in ensuring the accessibility and performance of AlgoViz for all users.
          </p>
        </section>
      </main>

      <footer className="project-footer">
        <p>© 2025 AlgoViz Team. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App