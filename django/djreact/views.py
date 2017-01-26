from django.http import HttpResponse
from selenium import webdriver

def my_image(request,url):
	driver = webdriver.PhantomJS(executable_path='node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs')
	driver.set_window_size(350, 350) # optional
	driver.get(url)
	driver.save_screenshot('/tmp/image.png') # save a screenshot to disk
	driver.close()
    	image_data = open("/tmp/image.png", "rb").read()
    	return HttpResponse(image_data, content_type="image/png")

