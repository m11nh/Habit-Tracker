from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

def main(port=None):
	httpd, port = create_server(port, SimpleHTTPRequestHandler)
	print("Frontend server runnint at: http://localhost:{}".format(port))
	httpd.serve_forever()

def create_server(port, SimpleHTTPRequestHandler):
	if port != None:
		server_address = ('', port)
		httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
		return httpd, port
	else: 
		for port in range(8080, 8200):
			try: 
				server_address = ('', port)
				httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
				return httpd, port
			except OSError as e:
				if 'Address is being used' in str(e):
					continue
		print("A port isn't available", file=sys.stderr)
		sys.exit(1)

def create_backend_url_js_file(url):
	f = open("/Users/minhnguyen/Desktop/Projects/Project2/code/frontend/src/js_src/backend_url.js", "w") 
	print(f"const API_URL = '{url}';", file = f)
	print("export default API_URL;", file = f)

API_URL = sys.argv[1]
create_backend_url_js_file(API_URL)
main()