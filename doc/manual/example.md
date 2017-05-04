# Example

```js
range( 3 ) ; // 0 1 2

range( 2 , 5 ) ; // 2 3 4

range( 5 , 2 , -1 ) ; // 5 4 3

count( 2 , 3 ) ; // 2 5 8 11 14 ...

repeat( "A" ) ; // A A A ...

nrepeat( "A" , 3 ) ; // A A A

cycle( "AB" ) ; // A B A B A B ...

ncycle( "AB" , 3 ) ; // A B A B A B

head( repeat( "A" ) , 3 ) : // A A A

list( nrepeat( "A" , 3 ) ) ; // AAA

pick( "ABCD" , range( 2 ) ) ; // A C

tee( "ABC" , 2 ) ; // [ A B C , A B C ]

any( [ false* , true , ... ] ) ; // T

any( [ false* ] ) ; // F

all( [ true* , false , ... ] ) ; // F

all( [ true* ] ) ; // T

some( [ true , true , false , true , ... ] , 3 ) ; // T

some( [ true , false , true , false* ] , 3 ) ; // F

import compare from "@aureooms/js-compare" ;

min( compare.increasing , [ 2 , 1 , 3 ] ) ; // 1

max( compare.increasing , [ 2 , 1 , 3 ] ) ; // 3

import operator from "@aureooms/js-operator" ;

reduce( operator.mul , range( 2 , 6 ) , 1 ) ; // 120

reduce( operator.add , range( 2 , 6 ) , 1 ) ; // 15

sum( range( 1 , 6 ) ) ; // 15

chain( [ "ABC" , "XY" ] ) ; // A B C X Y

zip( [ "ABC" , "XY" ] ) ; // AX BY

compress( count( 0 , 1 ) , cycle( [ true , false ] ) ) ; // 0 2 4 6 ...

import predicate from "@aureooms/js-predicate" ;

takewhile( predicate.le( 5 ) , count( 0 , 1 ) ) ; // 0 1 2 3 4 5

dropwhile( predicate.le( 5 ) , count( 0 , 1 ) ) ; // 6 7 8 ...

zip( [ count( 0 , 1 ) , "ABC" ] ) ; // 0A 1B 2C

enumerate( "ABC" ) ; // 0A 1B 2C

filter( predicate.divisible( 2 ) , count( 0 , 1 ) ) ; // 0 2 4 8 ...

filterfalse( predicate.divisible( 2 ) , count( 0 , 1 ) ) ; // 1 3 5 7 ...

group( operator.identity , "AAAABBBCCAABB" ) ; // [ A AAAA ] [ B BBB ] [ C CC ] [ A AA ] [ B BB ]

slice( count( 0 , 1 ) , 40 , 50 , 3 ) ; // 40 43 46 49

roundrobin( [ "ABC" , "D" , "EF" ] ) ; // A D E B F C

map( operator.truth , [ 0 , 1 , null , undefined , "A" ] ) ; // F T F F T

starmap( operator.mul , zip( count( 0 , 1 ) , count( 0 , 1 ) ) ) ; // 0 1 4 9 16 25 36 ...

product( [ "ABCD" , "xy" ] , 1 ) ; // Ax Ay Bx By Cx Cy Dx Dy

product( [ range( 2 ) ] , 3 ) ; // 000 001 010 011 100 101 110 111

permutations( "ABCD" , 2 ) ; // AB AC AD BA BC BD CA CB CD DA DB DC

permutations( range( 3 ) , 3 ) ; // 012 021 102 120 201 210

combinations( "ABCD" , 2 ) ; // AB AC AD BC BD CD

combinations( range( 4 ) , 3 ) ; // 012 013 023 123

combinationswithrepetition( "ABC" , 1 ) ; // A B C

combinationswithrepetition( range( 3 ) , 2 ) ; // 00 01 02 11 12 22

reversed( "ABC" ) ; // C B A

sorted( compare.increasing , [ 3 , 1 , 2 ] ) ; // 1 2 3

closure( x => x + 1 , 0 ) ; // 0 1 2 3 ...
```
