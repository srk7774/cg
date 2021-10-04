MathJax = {
  startup: {
	typeset: false,
  },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();

var browserHt = window.innerHeight;
var qString = window.location.search;
if(qString.length > 0) {
	var upper = -browserHt;
	var lower = 2*browserHt;
} else {
	var upper = -200;
	var lower = browserHt - 100;
}
function triggerMj() {
	document.querySelector('#container').querySelectorAll('p').forEach(function(node) {
	  if( (node.textContent.indexOf("$") > -1 || node.textContent.indexOf("$$") > -1) 
		  && node.getBoundingClientRect().top > upper 
		  && node.getBoundingClientRect().top < lower
	  ) {
		console.log("Processing: "+node.textContent.slice(0,30)+" ...");
		// So you can see what is going on
		if(qString.length == 0) {
			node.style.background = "#fdf";
		}
		// This processing the math in the node
		MathJax.typesetPromise([node]).then(() => {
		  // In case we want to do anything after processing
		});
		  
	  }
   });
}

window.addEventListener('DOMContentLoaded', (event) => {
	// This is needed so MathJax has time to do its thing on load
	function waitForMj() {
		if(typeof(MathJax) != 'undefined' && typeof(MathJax.typesetPromise) == 'function' ) {
			triggerMj();
			cancelAnimationFrame(raf);
		} else {		
			window.requestAnimationFrame(waitForMj);
		}	
	}
	var raf = window.requestAnimationFrame(waitForMj);	
});

let lastKnownScrollPosition = 0;
let ticking = false;

function doMj(scrollPos) {
	// Wait for MathJax	
	function waitForMj() {
		if(typeof(MathJax) != 'undefined' && typeof(MathJax.typesetPromise) == 'function') {
			triggerMj();
			cancelAnimationFrame(raf);
		} else {			
			window.requestAnimationFrame(waitForMj);
		}		
	}	
	var raf = window.requestAnimationFrame(waitForMj);	
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doMj(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
