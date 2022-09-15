package com.fabioalves.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabioalves.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale,Long> {
	
	

}
