#!/bin/bash

echo "Configuring Dragonstack DB"

psql -U node_user dragonstackdb < ./src/sql/generation.sql
psql -U node_user dragonstackdb < ./src/sql/dragon.sql

echo "Configured Dragonstack DB"
