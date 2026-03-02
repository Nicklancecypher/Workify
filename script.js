
<script>
        // 1. Job Data
        const jobs = [
            { title: "Residential Electrician", loc: "Nairobi, KE", type: "local", pay: "Ksh 3,500/day" },
            { title: "React Developer", loc: "Remote (USA)", type: "international", pay: "$30/hr" },
            { title: "Delivery Rider", loc: "Nakuru, KE", type: "local", pay: "Ksh 1,500/day" },
            { title: "Virtual Assistant", loc: "Remote (UK)", type: "international", pay: "£12/hr" }
        ];

        //2. Logic to Show Jobs
        // Function to add a new job to the list
function addNewJob() {
    // 1. Get the values from the form
    const title = document.getElementById('newJobTitle').value;
    const loc = document.getElementById('newJobLoc').value;
    const type = document.getElementById('newJobType').value;
    const pay = document.getElementById('newJobPay').value;

    // 2. Basic check: Don't add if fields are empty
    if (!title || !loc || !pay) {
        alert("Please fill in all fields to post a job!");
        return;
    }

    // 3. Add the new job to our "database" array
    jobList.push({ title: title, place: loc, type: type, pay: pay });

    // 4. Refresh the job feed so the new one appears immediately
    showJobs('all');

    // 5. Clear the form for the next entry
    document.getElementById('newJobTitle').value = '';
    document.getElementById('newJobLoc').value = '';
    document.getElementById('newJobPay').value = '';
    
    alert("Job Posted Successfully!");
}
        function displayJobs(filter) {
            const container = document.getElementById('job-feed');
            container.innerHTML = ''; // Clear current jobs

            const filtered = jobs.filter(j => filter === 'all' || j.type === filter);

            filtered.forEach(job => {
                container.innerHTML += `
                    <div class="job-card">
                        <span class="badge">${job.type}</span>
                        <h3>${job.title}</h3>
                        <p><strong>Location:</strong> ${job.loc}</p>
                        <p><strong>Pay:</strong> ${job.pay}</p>
                        <button class="btn-outline" style="width:100%">View Details</button>
                    </div>
                `;
            });
        }

        // 3. Logic for Profile Preview
        function updatePreview() {
            document.getElementById('pre-name').innerText = document.getElementById('in-name').value || "Your Name";
            document.getElementById('pre-skill').innerText = document.getElementById('in-skill').value || "Professional Skill";
            document.getElementById('pre-loc').innerText = " " + document.getElementById('in-loc').value;
            document.getElementById('pre-bio').innerText = document.getElementById('in-bio').value || "Your bio will appear here...";
        }

        // Load all jobs when the page opens
        window.onload = () => displayJobs('all');
    </script>
