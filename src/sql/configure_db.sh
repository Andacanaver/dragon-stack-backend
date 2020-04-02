#!/bin/bash

echo "Configuring Dragonstack DB"

psql -U node_user dragonstackdb < ./src/sql/generation.sql
psql -U node_user dragonstackdb < ./src/sql/dragon.sql
psql -U node_user dragonstackdb < ./src/sql/trait.sql
psql -U node_user dragonstackdb < ./src/sql/dragonTrait.sql

node ./src/sql/insertTraits.js

echo "Configured Dragonstack DB"
