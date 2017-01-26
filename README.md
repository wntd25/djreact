Example ReactJS with python Django project.

djreact is created with virtualenv.

To Activate the environment.
```bash
cd djreact
source bin/activate
```

To install python requirements.
```bash
pip install -r requirements.txt 
```

To install npm packages in package.json
```bash
npm install
```

To compile locally the JSX files under djreact/django/reactjs folder.
```bash
node_modules/.bin/webpack --config webpack.local.config.js
```

At this point, you can run `./manage.py runserver` under djreact/django folder and you should see the
Django welcome page in your browser at `http://localhost:8000`.

To deactivate the environment.
```bash
deactivate
```
