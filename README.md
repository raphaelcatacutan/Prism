# Prism - random name

## Init project (notes para di ko makalimutan)
1. Create a maven project with webapp....soething archetype
2. Add dependencies (just copy pom)
3. Add plugins (pom)
4. Run `npm run -y`

## notes
1. no need to add mapping if already annotated (error)

## Building

### Requirements
1. Maven added to PATH
2. Tomcat v.11 (latest)
    - This project uses 8081 as port (pom)
    - This project uses root root as username and passwrod (pom)
    - Configure user to have `manager-script` role (tomcat installation path)
3. node.js (????????)

### Running
1. (no need for now) transpile react - need step here for bootstrap, reacts stuff but no need for now
2. Start tomcat
3. Run `mvn tomcat7:deploy` (first time), `mvn tomcat7:redeploy` when redeploying