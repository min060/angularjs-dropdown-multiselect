This directive gives you a Bootstrap Dropdown with the power of AngularJS directives.

# Features
- Based on Bootstrap's dropdown.
- jQuery is not necessary.
- Seperated your data and the selection data. no modification to the data made.
- Built-in search.
- Complete control on the selected items model to fit it to your requirements.
- Two view options: normal list and checkboxes.
- Pre-selected values.
- Limit selection count.
- Grouping items by property.
- Callback events.
- Translation texts.
- Scrollable list (useful for big lists)
- Keyboard controls

## Demo
http://dotansimha.github.io/angularjs-dropdown-multiselect/

## Dependencies
- required: AngularJS >= 1.5, Bootstrap >= 3.0

- Make sure to add the dependencies before the directive's js file. 
- Note: Bootstrap JS file is not needed for the directive, it just uses the CSS file

## Install
1. Download the files
	1. Using bower: <img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30">
		Just run `bower install angularjs-dropdown-multiselect`
	2. Using npm : 
		Just run `npm install angularjs-dropdown-multiselect`
	3. Manually:
		You can download the `.js` file directly or clone this repository
2. Include the file in your app
	- `<script type="text/javascript" src="angularjs-dropdown-multiselect.js"></script>`.
	- You can also use the minfined version (`angularjs-dropdown-multiselect.min.js`).
3. Include the module in angular (i.e. in `app.js`) - `angularjs-dropdown-multiselect`


## Contributing
Issues and PR's are much appreciated. We're currently working on reducing them.
When you create a new PR please make it against the develop branch when adding new features and to the fix branch when fixing small issues instead of master.

## Usage and Documentation
See the documentation and examples in the GitHub pages:
http://dotansimha.github.io/angularjs-dropdown-multiselect/

-----

# ビルド手順

```bash
$ npm i
$ npm i -g bower
$ bower install
$ npm run build
```

# 環境構築(Centos7)

```bash
sudo docker run -it -d --name centos7 centos:centos7
sudo docker exec -it centos7 /bin/sh

$ yum install git -y
$ yum install which bash -y
$ curl -sL https://rpm.nodesource.com/setup_7.x | bash -
$ yum install nodejs -y

$ git clone https://github.com/verybestjp/angularjs-dropdown-multiselect.git
$ cd angularjs-dropdown-multiselect
$ yum install make gcc-c++ bzip2 -y
$ npm install
$ npm install -g bower
$ bower install --allow-root
$ npm run build
```
