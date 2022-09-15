package com.fabioalves.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fabioalves.dsmeta.entities.Sale;
import com.fabioalves.dsmeta.repositories.SaleRepository;


@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
}
