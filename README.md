javascript-skeleton-project
===========================

A starting point for my JavaScript projects.

Setup:
------

```
npm install
grunt install
```

Running All Tests:
------------------

```
grunt test
```

Tests can also be accessed in the browser. Type:

```
grunt connect
```

And see tests here:
- /test.html
- /functionalTest.html

Unit Test:
-----------

```
grunt test:unit
```

Functional Tests:
-----------------

```
grunt test:func
```

Checking Coding Standards:
--------------------------

```
grunt lint
```

Building:
---------

```
grunt build
```

This will run unit and functional tests and produce production ready files in _site directory.