ZAVA TECH TEST

SDK: Angular + Angular Material

The "design" a proof of concept for the various elements.

Most Relevant files:

index.less -> contain all the styling
used specific classes in combination with ng-class for styling social media buttons
1 responsive breakpoint for mobile display

components -> starRaring-directive.js
    Custom directive for star rating

app\main.html -> main view
app\main.js -> main module definition
app\Review.controller.js -> controller that handles

Notes about the contoller:

Wrote a custom directive for the star rating and used it twice: one for input and one as read-only
Social media is looped with ng-repeat
I used ng-class to style dynaically the social media elements (reflects into index.less)
$scope.watch is used to monitor changes in social media checkboxes
Form validation relies on data binding

