// Set values to hide categories
var M5Visible = true;  // Set to false to Hide Media Manager & EZOrder
var EzOrderbumpVisible = true;  // Set to false to hide EZOrder Bump
var GATVisible = false;  // Set to false to hide GAT
var ACJVisible = true;  // Set to false to hide ACJ
		
// Configure the IP addresses for different servers here
const ServicesServerIPAddress = '10.230.227.228';
const M5ServerIPAddress = '10.230.227.230';
const GATServerIPAddress = '#';
const ACJServerIPAddress = '10.93.98.41';
		
function generatePortalLink(serverNumber, portalNumber) {
	switch (serverNumber) {
		case 1:
			// Links for Services Server
			switch (portalNumber) {
				case 1:
					return `https://${ServicesServerIPAddress}/`;
				case 2:
					return `https://${ServicesServerIPAddress}:8011/ClubClientWeb/#/login`;
				default:
					return '#'; 
			}
		case 2:
			// Links for M5 Server
			switch (portalNumber) {
				case 1:
					return `http://${M5ServerIPAddress}/ad-service/module/#/media`; // Updated link for Service Window Media Manager
				case 2:
					return `http://${M5ServerIPAddress}:3333/products`; // Updated link for EZOrder
				case 3:
					return `http://${M5ServerIPAddress}:3333/kitchen?#`; // Updated link for Bistro Bump Screen
				default:
					return '#'; 
			}
		case 3:
			// Links for GAT Server
			switch (portalNumber) {
				case 1:
					return `http://${GATServerIPAddress}:8090/gat/1.1/ui/index.html`; // Updated link for GAT Portal
				default:
					return '#'; 
			}
		case 4:
			// Links for GAT Server
			switch (portalNumber) {
				case 1:
					return `https://${ACJServerIPAddress}/bcs`; // Updated link for ACJ Portal
				default:
					return '#'; 
			}
		default:
			return '#'; 
	}
}

document.addEventListener('DOMContentLoaded', function () {
// Check the configuration and hide M5 Service Tools and EZOrder Bump Screen
if (!M5Visible) {
	document.getElementById('M5Category').style.display = 'none';
	document.getElementById('M5Link').style.display = 'none';
	document.getElementById('ServiceCategory').style.display = 'none';
	document.getElementById('ServiceLink').style.display = 'none';
}


// Check the configuration and hide EZOrder Bump Screen
if (!EzOrderbumpVisible) {
	document.getElementById('ServiceCategory').style.display = 'none';
	document.getElementById('ServiceLink').style.display = 'none';
}

// Check the configuration and hide GAT
if (!GATVisible) {
	document.getElementById('GATCategory').style.display = 'none';
	document.getElementById('GATLink').style.display = 'none';
}

// Check the configuration and hide ACJ
if (!ACJVisible) {
	document.getElementById('ACJCategory').style.display = 'none';
	document.getElementById('ACJLink').style.display = 'none';
}
});
