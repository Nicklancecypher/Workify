// 1. Data: Our 'Database' of opportunities
const allOpportunities = [
  { title: "Farm Manager", location: "Nakuru, Kenya", type: "local", pay: "Ksh 40,000/mo" },
  { title: "Virtual Assistant", location: "Remote (USA Client)", type: "international", pay: "$15/hr" },
  { title: "Construction Lead", location: "Nairobi, Kenya", type: "local", pay: "Ksh 5,000/day" },
  { title: "Content Writer", location: "Remote (UK Client)", type: "international", pay: "£20/hr" }
];

// 2. The Function: Displaying the jobs based on what the user wants
function displayJobs(filterType) {
  const feed = document.getElementById('job-feed');
  feed.innerHTML = ""; // Clear the screen first

  // Filter the list based on 'local' or 'international'
  const filteredList = allOpportunities.filter(job => {
    if (filterType === 'all') return true;
    return job.type === filterType;
  });

  // Create the HTML for each job and put it on the page
  filteredList.forEach(job => {
    feed.innerHTML += `
      <article class="job-card">
        <span class="badge">${job.type.toUpperCase()}</span>
        <h2>${job.title}</h2>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Rate:</strong> ${job.pay}</p>
        <button class="apply-btn">Apply Now</button>
      </article>
    `;
  });
}

// 3. Initial Load: Show all jobs when the app opens
window.onload = () => displayJobs('all');
